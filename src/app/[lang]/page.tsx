import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { CopyInstallCommand } from '@/components/copy-install';
import { i18n } from '@/lib/i18n';
import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-hero',
});

const AGENTS = {
  'Build & Analysis': [
    'explore', 'analyst', 'planner', 'architect',
    'executor', 'debugger', 'verifier', 'explore-harness',
  ],
  Review: [
    'code-reviewer', 'security-reviewer', 'quality-reviewer',
    'style-reviewer', 'api-reviewer', 'performance-reviewer',
  ],
  Domain: [
    'test-engineer', 'qa-tester', 'writer', 'designer',
    'researcher', 'ux-researcher', 'information-architect',
    'product-analyst', 'product-manager', 'dependency-expert',
    'git-master', 'build-fixer', 'code-simplifier', 'vision',
  ],
  Coordination: [
    'critic', 'quality-strategist', 'team-orchestrator',
    'team-executor', 'sisyphus-lite',
  ],
};

const translations = {
  en: {
    heroSubtitle: 'Multi-Agent Orchestration for Codex CLI',
    heroDesc: [
      'A workflow layer for OpenAI Codex CLI.',
      '33 agent prompts and 37 skills working together.',
    ],
    metaTitle: 'Oh My CodeX — Multi-Agent Orchestration for Codex CLI',
    metaDescription:
      'Official documentation for oh-my-codex, a multi-agent orchestration layer for OpenAI Codex CLI.',
    getStarted: 'Get Started',
    viewDocs: 'View Docs',
    whatsDifferent: "What's Different?",
    whatsDifferentDesc:
      'A specialized agent layer that runs on top of OpenAI Codex CLI.',
    features: [
      { title: '33 Specialized Agent Prompts',
        desc: 'Prompts dedicated to each role from exploration and planning to verification and review.',
        tag: 'Agents' },
      { title: '37 Automation Skills',
        desc: '$autopilot, $ralph, $ultrawork — complex pipelines run with a single invocation.',
        tag: 'Skills' },
      { title: 'Codex-Native Hooks',
        desc: 'Lifecycle, context, and magic-keyword hooks wired directly into Codex CLI.',
        tag: 'Hooks' },
      { title: 'Cross-CLI Integrations',
        desc: 'OpenClaw bridges Codex and Claude; MCP and $ask-claude / $ask-gemini bring external tools in.',
        tag: 'Integrations' },
    ],
    pipelineTitle: '$autopilot Pipeline',
    pipelineDesc:
      'From a single idea, analysis, design, planning, execution, QA, and verification all run automatically.',
    pipelineSteps: [
      { label: 'Idea',       role: 'User'     },
      { label: 'Analysis',   role: 'Analyst'  },
      { label: 'Design',     role: 'Architect'},
      { label: 'Planning',   role: 'Planner'  },
      { label: 'Execution',  role: 'Executor' },
      { label: 'QA',         role: 'UltraQA'  },
      { label: 'Validation', role: 'Verifier' },
    ],
    agentsTitle: 'Specialized Agent Prompts',
    agentsDesc: '4 lanes, 33 prompts. Each optimized for its role.',
    viewAllAgents: 'View all agents',
    skillsTitle: 'Key Skills',
    skillsDesc: 'Execute complex workflows with a single invocation.',
    skills: [
      { name: 'deep-interview',
        desc: 'Socratic requirements crystallization before execution.' },
      { name: 'ralplan',
        desc: 'Iterative consensus planning until planner, architect, and critic agree.' },
      { name: 'team',
        desc: 'N coordinated agents on a shared task list.' },
      { name: 'ralph',
        desc: 'Self-referential loop that never stops until complete.' },
    ],
    viewAllSkills: 'View all skills',
    stepsTitle: 'Get Started in 3 Steps',
    steps: [
      { step: '01', title: 'Install Codex CLI',
        desc: 'Run "npm i -g @openai/codex".' },
      { step: '02', title: 'Install OMX',
        desc: 'Run "npm i -g oh-my-codex", then "omx setup".' },
      { step: '03', title: 'Start $autopilot',
        desc: 'Type "autopilot build me X" and agents will start working.' },
    ],
  },
  ko: {
    heroSubtitle: 'Multi-Agent Orchestration for Codex CLI',
    heroDesc: [
      'A workflow layer for OpenAI Codex CLI.',
      '33 agent prompts and 37 skills working together.',
    ],
    metaTitle: 'Oh My CodeX — Multi-Agent Orchestration for Codex CLI',
    metaDescription:
      'Official documentation for oh-my-codex, a multi-agent orchestration layer for OpenAI Codex CLI.',
    getStarted: 'Get Started',
    viewDocs: 'View Docs',
    whatsDifferent: "What's Different?",
    whatsDifferentDesc:
      'A specialized agent layer that runs on top of OpenAI Codex CLI.',
    features: [
      { title: '33 Specialized Agent Prompts',
        desc: 'Prompts dedicated to each role from exploration and planning to verification and review.',
        tag: 'Agents' },
      { title: '37 Automation Skills',
        desc: '$autopilot, $ralph, $ultrawork — complex pipelines run with a single invocation.',
        tag: 'Skills' },
      { title: 'Codex-Native Hooks',
        desc: 'Lifecycle, context, and magic-keyword hooks wired directly into Codex CLI.',
        tag: 'Hooks' },
      { title: 'Cross-CLI Integrations',
        desc: 'OpenClaw bridges Codex and Claude; MCP and $ask-claude / $ask-gemini bring external tools in.',
        tag: 'Integrations' },
    ],
    pipelineTitle: '$autopilot Pipeline',
    pipelineDesc:
      'From a single idea, analysis, design, planning, execution, QA, and verification all run automatically.',
    pipelineSteps: [
      { label: 'Idea',       role: 'User'     },
      { label: 'Analysis',   role: 'Analyst'  },
      { label: 'Design',     role: 'Architect'},
      { label: 'Planning',   role: 'Planner'  },
      { label: 'Execution',  role: 'Executor' },
      { label: 'QA',         role: 'UltraQA'  },
      { label: 'Validation', role: 'Verifier' },
    ],
    agentsTitle: 'Specialized Agent Prompts',
    agentsDesc: '4 lanes, 33 prompts. Each optimized for its role.',
    viewAllAgents: 'View all agents',
    skillsTitle: 'Key Skills',
    skillsDesc: 'Execute complex workflows with a single invocation.',
    skills: [
      { name: 'deep-interview',
        desc: 'Socratic requirements crystallization before execution.' },
      { name: 'ralplan',
        desc: 'Iterative consensus planning until planner, architect, and critic agree.' },
      { name: 'team',
        desc: 'N coordinated agents on a shared task list.' },
      { name: 'ralph',
        desc: 'Self-referential loop that never stops until complete.' },
    ],
    viewAllSkills: 'View all skills',
    stepsTitle: 'Get Started in 3 Steps',
    steps: [
      { step: '01', title: 'Install Codex CLI',
        desc: 'Run "npm i -g @openai/codex".' },
      { step: '02', title: 'Install OMX',
        desc: 'Run "npm i -g oh-my-codex", then "omx setup".' },
      { step: '03', title: 'Start $autopilot',
        desc: 'Type "autopilot build me X" and agents will start working.' },
    ],
  },
  zh: {
    heroSubtitle: 'Multi-Agent Orchestration for Codex CLI',
    heroDesc: [
      'A workflow layer for OpenAI Codex CLI.',
      '33 agent prompts and 37 skills working together.',
    ],
    metaTitle: 'Oh My CodeX — Multi-Agent Orchestration for Codex CLI',
    metaDescription:
      'Official documentation for oh-my-codex, a multi-agent orchestration layer for OpenAI Codex CLI.',
    getStarted: 'Get Started',
    viewDocs: 'View Docs',
    whatsDifferent: "What's Different?",
    whatsDifferentDesc:
      'A specialized agent layer that runs on top of OpenAI Codex CLI.',
    features: [
      { title: '33 Specialized Agent Prompts',
        desc: 'Prompts dedicated to each role from exploration and planning to verification and review.',
        tag: 'Agents' },
      { title: '37 Automation Skills',
        desc: '$autopilot, $ralph, $ultrawork — complex pipelines run with a single invocation.',
        tag: 'Skills' },
      { title: 'Codex-Native Hooks',
        desc: 'Lifecycle, context, and magic-keyword hooks wired directly into Codex CLI.',
        tag: 'Hooks' },
      { title: 'Cross-CLI Integrations',
        desc: 'OpenClaw bridges Codex and Claude; MCP and $ask-claude / $ask-gemini bring external tools in.',
        tag: 'Integrations' },
    ],
    pipelineTitle: '$autopilot Pipeline',
    pipelineDesc:
      'From a single idea, analysis, design, planning, execution, QA, and verification all run automatically.',
    pipelineSteps: [
      { label: 'Idea',       role: 'User'     },
      { label: 'Analysis',   role: 'Analyst'  },
      { label: 'Design',     role: 'Architect'},
      { label: 'Planning',   role: 'Planner'  },
      { label: 'Execution',  role: 'Executor' },
      { label: 'QA',         role: 'UltraQA'  },
      { label: 'Validation', role: 'Verifier' },
    ],
    agentsTitle: 'Specialized Agent Prompts',
    agentsDesc: '4 lanes, 33 prompts. Each optimized for its role.',
    viewAllAgents: 'View all agents',
    skillsTitle: 'Key Skills',
    skillsDesc: 'Execute complex workflows with a single invocation.',
    skills: [
      { name: 'deep-interview',
        desc: 'Socratic requirements crystallization before execution.' },
      { name: 'ralplan',
        desc: 'Iterative consensus planning until planner, architect, and critic agree.' },
      { name: 'team',
        desc: 'N coordinated agents on a shared task list.' },
      { name: 'ralph',
        desc: 'Self-referential loop that never stops until complete.' },
    ],
    viewAllSkills: 'View all skills',
    stepsTitle: 'Get Started in 3 Steps',
    steps: [
      { step: '01', title: 'Install Codex CLI',
        desc: 'Run "npm i -g @openai/codex".' },
      { step: '02', title: 'Install OMX',
        desc: 'Run "npm i -g oh-my-codex", then "omx setup".' },
      { step: '03', title: 'Start $autopilot',
        desc: 'Type "autopilot build me X" and agents will start working.' },
    ],
  },
  ja: {
    heroSubtitle: 'Multi-Agent Orchestration for Codex CLI',
    heroDesc: [
      'A workflow layer for OpenAI Codex CLI.',
      '33 agent prompts and 37 skills working together.',
    ],
    metaTitle: 'Oh My CodeX — Multi-Agent Orchestration for Codex CLI',
    metaDescription:
      'Official documentation for oh-my-codex, a multi-agent orchestration layer for OpenAI Codex CLI.',
    getStarted: 'Get Started',
    viewDocs: 'View Docs',
    whatsDifferent: "What's Different?",
    whatsDifferentDesc:
      'A specialized agent layer that runs on top of OpenAI Codex CLI.',
    features: [
      { title: '33 Specialized Agent Prompts',
        desc: 'Prompts dedicated to each role from exploration and planning to verification and review.',
        tag: 'Agents' },
      { title: '37 Automation Skills',
        desc: '$autopilot, $ralph, $ultrawork — complex pipelines run with a single invocation.',
        tag: 'Skills' },
      { title: 'Codex-Native Hooks',
        desc: 'Lifecycle, context, and magic-keyword hooks wired directly into Codex CLI.',
        tag: 'Hooks' },
      { title: 'Cross-CLI Integrations',
        desc: 'OpenClaw bridges Codex and Claude; MCP and $ask-claude / $ask-gemini bring external tools in.',
        tag: 'Integrations' },
    ],
    pipelineTitle: '$autopilot Pipeline',
    pipelineDesc:
      'From a single idea, analysis, design, planning, execution, QA, and verification all run automatically.',
    pipelineSteps: [
      { label: 'Idea',       role: 'User'     },
      { label: 'Analysis',   role: 'Analyst'  },
      { label: 'Design',     role: 'Architect'},
      { label: 'Planning',   role: 'Planner'  },
      { label: 'Execution',  role: 'Executor' },
      { label: 'QA',         role: 'UltraQA'  },
      { label: 'Validation', role: 'Verifier' },
    ],
    agentsTitle: 'Specialized Agent Prompts',
    agentsDesc: '4 lanes, 33 prompts. Each optimized for its role.',
    viewAllAgents: 'View all agents',
    skillsTitle: 'Key Skills',
    skillsDesc: 'Execute complex workflows with a single invocation.',
    skills: [
      { name: 'deep-interview',
        desc: 'Socratic requirements crystallization before execution.' },
      { name: 'ralplan',
        desc: 'Iterative consensus planning until planner, architect, and critic agree.' },
      { name: 'team',
        desc: 'N coordinated agents on a shared task list.' },
      { name: 'ralph',
        desc: 'Self-referential loop that never stops until complete.' },
    ],
    viewAllSkills: 'View all skills',
    stepsTitle: 'Get Started in 3 Steps',
    steps: [
      { step: '01', title: 'Install Codex CLI',
        desc: 'Run "npm i -g @openai/codex".' },
      { step: '02', title: 'Install OMX',
        desc: 'Run "npm i -g oh-my-codex", then "omx setup".' },
      { step: '03', title: 'Start $autopilot',
        desc: 'Type "autopilot build me X" and agents will start working.' },
    ],
  },
} as const;

type Lang = keyof typeof translations;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Lang] ?? translations.en;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Lang] ?? translations.en;
  const lp = lang === i18n.defaultLanguage ? '' : `/${lang}`;

  return (
    <HomeLayout
      nav={{
        title: 'Oh My CodeX',
        url: lp || '/',
        transparentMode: 'top' as const,
      }}
      i18n={i18n}
      githubUrl="https://github.com/Yeachan-Heo/oh-my-codex"
      links={[{ text: 'Docs', url: `${lp}/docs` }]}
    >
      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-28 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-grid absolute inset-0 opacity-[0.03] dark:opacity-[0.04]" />
        </div>

        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-fd-muted-foreground">
          {t.heroSubtitle}
        </p>

        <h1
          className={`hero-title text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ${jetbrainsMono.className}`}
        >
          Oh My
          <br />
          CodeX
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-fd-muted-foreground sm:text-xl">
          {t.heroDesc[0]}
          <br className="hidden sm:block" />
          {t.heroDesc[1]}
        </p>

        <CopyInstallCommand />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`${lp}/docs/getting-started`}
            className="inline-flex h-11 items-center rounded-lg bg-fd-primary px-6 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            {t.getStarted}
          </Link>
          <Link
            href={`${lp}/docs`}
            className="inline-flex h-11 items-center rounded-lg border border-fd-border bg-fd-background px-6 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            {t.viewDocs}
          </Link>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-fd-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.whatsDifferent}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-fd-muted-foreground">
            {t.whatsDifferentDesc}
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {t.features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-xl border border-fd-border bg-fd-card/50 p-8 transition-colors hover:bg-fd-card"
              >
                <span className="mb-4 inline-block rounded-md bg-fd-primary/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-fd-primary dark:bg-fd-primary/5">
                  {feature.tag}
                </span>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="border-t border-fd-border bg-fd-card/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.pipelineTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-fd-muted-foreground">
            {t.pipelineDesc}
          </p>

          {/* Desktop: horizontal flow */}
          <div className="mt-16 hidden md:block">
            <div className="relative flex items-start justify-between">
              <div className="absolute left-[calc(theme(spacing.8))] right-[calc(theme(spacing.8))] top-8 h-px bg-fd-border" />
              {t.pipelineSteps.map((step, i) => (
                <div
                  key={step.label}
                  className="relative flex flex-col items-center"
                  style={{ width: `${100 / t.pipelineSteps.length}%` }}
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-fd-border bg-fd-background text-sm font-bold transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="mt-3 text-sm font-semibold">
                    {step.label}
                  </span>
                  <span className="mt-1 text-xs text-fd-muted-foreground">
                    {step.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="mt-12 md:hidden">
            <div className="relative ml-8 border-l border-fd-border pl-8">
              {t.pipelineSteps.map((step, i) => (
                <div key={step.label} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-[calc(theme(spacing.8)+theme(spacing.4)+1px)] flex h-8 w-8 items-center justify-center rounded-full border border-fd-border bg-fd-background text-xs font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <span className="text-sm font-semibold">{step.label}</span>
                    <span className="ml-2 text-xs text-fd-muted-foreground">
                      {step.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agents ── */}
      <section className="border-t border-fd-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.agentsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-fd-muted-foreground">
            {t.agentsDesc}
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {Object.entries(AGENTS).map(([lane, agents]) => (
              <div
                key={lane}
                className="rounded-xl border border-fd-border p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-base font-semibold">{lane}</h3>
                  <span className="rounded-full bg-fd-muted px-2 py-0.5 text-xs text-fd-muted-foreground">
                    {agents.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {agents.map((agent) => (
                    <span
                      key={agent}
                      className="inline-block rounded-md bg-fd-muted px-2.5 py-1 font-mono text-xs text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                    >
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`${lp}/docs/agents`}
              className="text-sm font-medium text-fd-muted-foreground underline decoration-fd-border underline-offset-4 transition-colors hover:text-fd-foreground"
            >
              {t.viewAllAgents}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="border-t border-fd-border bg-fd-card/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t.skillsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-fd-muted-foreground">
            {t.skillsDesc}
          </p>

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border sm:grid-cols-2">
            {t.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col gap-2 bg-fd-background p-8"
              >
                <code className="w-fit rounded-md bg-fd-muted px-2.5 py-1 font-mono text-sm font-semibold">
                  {`$${skill.name}`}
                </code>
                <p className="text-sm text-fd-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`${lp}/docs/skills`}
              className="text-sm font-medium text-fd-muted-foreground underline decoration-fd-border underline-offset-4 transition-colors hover:text-fd-foreground"
            >
              {t.viewAllSkills}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Get Started ── */}
      <section className="border-t border-fd-border px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.stepsTitle}
          </h2>

          <div className="mx-auto mt-16 grid max-w-xl gap-8 text-left">
            {t.steps.map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="flex-none font-mono text-3xl font-bold text-fd-muted-foreground/40">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-fd-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={`${lp}/docs/getting-started`}
            className="mt-12 inline-flex h-11 items-center rounded-lg bg-fd-primary px-8 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            {t.getStarted}
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-fd-border px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-fd-muted-foreground">
            Oh My CodeX
          </span>
          <div className="flex gap-6">
            <Link
              href={`${lp}/docs`}
              className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              Docs
            </Link>
            <a
              href="https://github.com/Yeachan-Heo/oh-my-codex"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </HomeLayout>
  );
}
