'use client';

import Link from 'next/link';
import { LanguageSelect } from 'fumadocs-ui/layouts/shared/slots/language-select';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';

function LanguageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function DocsSidebarFooter({
  supportHref,
  supportLabel,
}: {
  supportHref: string;
  supportLabel: string;
}) {
  return (
    <div className="docs-sidebar-footer">
      <LanguageSelect
        aria-label="Choose language"
        className="docs-sidebar-footer__icon docs-sidebar-footer__lang"
      >
        <LanguageIcon />
      </LanguageSelect>

      <Link
        href={supportHref}
        aria-label={supportLabel}
        className="docs-sidebar-footer__icon"
      >
        <HelpIcon />
      </Link>

      <ThemeSwitch
        className="docs-sidebar-footer__theme"
        mode="light-dark"
      />
    </div>
  );
}
