import 'fumadocs-ui/style.css';
import './global.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Oh My CodeX — Docs',
  description:
    'Official documentation for oh-my-codex, a multi-agent orchestration layer for OpenAI Codex CLI.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
