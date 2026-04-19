'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type Vote = 'up' | 'down';

const COPY = {
  en: {
    helpful: 'Was this page helpful?',
    thanks: 'Thanks!',
    edit: 'Edit this page',
    report: 'Report an issue',
  },
  ko: {
    helpful: '이 페이지가 도움이 되었나요?',
    thanks: '감사합니다!',
    edit: '이 페이지 편집',
    report: '문제 신고',
  },
  ja: {
    helpful: 'このページは役に立ちましたか？',
    thanks: 'ありがとうございます',
    edit: 'このページを編集',
    report: '問題を報告',
  },
  zh: {
    helpful: '本页是否有帮助？',
    thanks: '谢谢！',
    edit: '编辑此页',
    report: '反馈问题',
  },
} as const;

type Lang = keyof typeof COPY;

export function PageFooter({
  path,
  locale,
  editUrl,
}: {
  path: string;
  locale: string;
  editUrl: string;
}) {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_SUPPORT === '1';
  const lang: Lang = (['en', 'ko', 'ja', 'zh'] as const).includes(locale as Lang)
    ? (locale as Lang)
    : 'en';
  const copy = COPY[lang];

  const [voted, setVoted] = useState<Vote | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prev = window.localStorage.getItem(`vote:${path}`);
    if (prev === 'up' || prev === 'down') setVoted(prev);
  }, [path]);

  if (!enabled) return null;

  const supportHref =
    (lang === 'en' ? '' : `/${lang}`) +
    `/docs/support?path=${encodeURIComponent(path)}`;

  // TODO: server currently rejects votes (Turnstile required). UI-only for MVP.
  async function vote(value: Vote) {
    if (voted) return;
    setVoted(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(`vote:${path}`, value);
    }
    // Best-effort; ignore failures.
    try {
      await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'vote',
          path,
          locale: lang,
          value,
          turnstileToken: 'n/a',
        }),
      });
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-fd-border pt-4 text-sm text-fd-muted-foreground">
      <div className="flex items-center gap-2">
        {voted ? (
          <span>{copy.thanks}</span>
        ) : (
          <>
            <span>{copy.helpful}</span>
            <button
              type="button"
              onClick={() => vote('up')}
              aria-label="helpful"
              className="rounded border border-fd-border px-2 py-1 hover:bg-fd-muted"
            >
              👍
            </button>
            <button
              type="button"
              onClick={() => vote('down')}
              aria-label="not helpful"
              className="rounded border border-fd-border px-2 py-1 hover:bg-fd-muted"
            >
              👎
            </button>
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        <a href={editUrl} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
          {copy.edit}
        </a>
        <Link href={supportHref} className="underline-offset-2 hover:underline">
          {copy.report}
        </Link>
      </div>
    </div>
  );
}
