#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const rootDir = new URL('..', import.meta.url);
const docsDir = new URL('../content/docs/', import.meta.url);
const localizedFilePattern = /(?:\.(ko|ja|zh)\.mdx$|meta\.(ko|ja|zh)\.json$)/;
const localeRootLinkPatterns = [
  { label: 'markdown link', regex: /\]\((\/docs(?:[)#/?]|$))/g },
  { label: 'double-quoted path', regex: /"(\/docs(?:["#/?]|$))/g },
  { label: 'single-quoted path', regex: /'(\/docs(?:['#/?]|$))/g },
];

function walk(dirUrl, acc = []) {
  for (const entry of readdirSync(dirUrl, { withFileTypes: true })) {
    const childUrl = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, dirUrl);
    if (entry.isDirectory()) {
      walk(childUrl, acc);
    } else if (localizedFilePattern.test(entry.name)) {
      acc.push(childUrl);
    }
  }
  return acc;
}

function lineNumberAt(text, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (text.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

const failures = [];

for (const fileUrl of walk(docsDir)) {
  if (!statSync(fileUrl).isFile()) continue;
  const text = readFileSync(fileUrl, 'utf8');

  for (const { label, regex } of localeRootLinkPatterns) {
    regex.lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      failures.push({
        file: relative(rootDir.pathname, fileUrl.pathname),
        line: lineNumberAt(text, match.index),
        label,
        value: match[1],
      });
    }
  }
}

if (failures.length > 0) {
  console.error('[check-localized-doc-links] Localized docs must not link to /docs without a locale prefix.');
  for (const failure of failures) {
    console.error(`- ${failure.file}:${failure.line} (${failure.label}) -> ${failure.value}`);
  }
  process.exitCode = 1;
} else {
  console.log('[check-localized-doc-links] OK');
}
