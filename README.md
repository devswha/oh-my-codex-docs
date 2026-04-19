# omx-docs

Official documentation site for [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex), a multi-agent orchestration layer for OpenAI Codex CLI.

- **Live site:** https://omx.vibetip.help
- **Framework:** Next.js 16 + Fumadocs 16
- **Languages:** English (default), 한국어, 中文, 日本語

## Development

```bash
npm install
npm run dev
```

The `prebuild` script fetches the current `oh-my-codex` version from upstream and writes it to `src/lib/version.ts`.

## Content

All MDX lives under `content/docs/`. Each page ships in four languages using the `.mdx`, `.ko.mdx`, `.zh.mdx`, `.ja.mdx` suffix convention. Sidebars are defined by `meta.json` files with matching `meta.{ko,zh,ja}.json` siblings.

## Build

```bash
npm run build
```
