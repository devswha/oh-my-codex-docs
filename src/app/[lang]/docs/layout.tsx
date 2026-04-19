import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n';
import { OMX_VERSION } from '@/lib/version';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      nav={{
        title: (
          <div className="flex flex-col">
            <span>Oh My CodeX</span>
            <span className="text-xs text-fd-muted-foreground">v{OMX_VERSION}</span>
          </div>
        ),
        url: lang === i18n.defaultLanguage ? '/docs' : `/${lang}/docs`,
      }}
      sidebar={{ defaultOpenLevel: 1 }}
      i18n={i18n}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/Yeachan-Heo/oh-my-codex',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
