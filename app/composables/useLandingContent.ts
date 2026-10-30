export interface LandingFeature {
  icon: string
  title: string
  description: string
}

export interface HowItWorksStep {
  title: string
  description: string
}

export interface LandingBenefit {
  value: string
  label: string
  isPlaceholder: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LandingContent {
  features: LandingFeature[]
  howItWorksSteps: HowItWorksStep[]
  benefits: LandingBenefit[]
  faq: FaqItem[]
  demoCtaHref: string
  contactEmailHref: string
}

/**
 * Content for the redesigned, single-page marketing landing page, built for
 * https://github.com/smuratovbizl/bizlibrary-ai-mark1/issues/5.
 */
export const landingContent: LandingContent = {
  features: [
    {
      icon: 'i-lucide-sparkles',
      title: 'Personalized learning recommendations',
      description: 'AI matches every employee with the courses and skills paths most relevant to their role, goals, and gaps.',
    },
    {
      icon: 'i-lucide-search',
      title: 'AI-powered content search',
      description: 'Ask a question in plain language and get pointed straight to the exact lesson, video, or article that answers it.',
    },
    {
      icon: 'i-lucide-bar-chart',
      title: 'Skill tracking',
      description: 'See each employee\'s skills grow over time, with automatic tagging that maps training back to real competencies.',
    },
    {
      icon: 'i-lucide-check-circle',
      title: 'Completion reporting',
      description: 'Live dashboards show who has finished required training and who needs a nudge, without manual spreadsheet work.',
    },
    {
      icon: 'i-lucide-users',
      title: 'Manager dashboards',
      description: 'Give managers a single view of their team\'s progress, strengths, and risk areas so coaching conversations are backed by data.',
    },
    {
      icon: 'i-lucide-shield-check',
      title: 'Compliance alerts',
      description: 'Automatic reminders flag expiring certifications and overdue compliance training before they become a liability.',
    },
  ],
  howItWorksSteps: [
    {
      title: 'Connect your content',
      description: 'Import your existing course library and policies so BizLibrary AI has a full picture of what your organization already offers.',
    },
    {
      title: 'AI builds learner profiles',
      description: 'Our models analyze roles, goals, and skill gaps to assemble a personalized learning plan for every employee automatically.',
    },
    {
      title: 'Track progress and act',
      description: 'Managers and L&D teams monitor completion, skills growth, and compliance status in one dashboard, and intervene early when needed.',
    },
  ],
  // The figures below are illustrative placeholders only, invented to show
  // the shape and tone of the "benefits" row. They are not derived from any
  // customer data or study, and every entry is flagged with
  // `isPlaceholder: true` plus a "(placeholder)" label in the rendered copy
  // so they are never mistaken for a real, sourced metric.
  benefits: [
    {
      value: '40% faster onboarding (placeholder)',
      label: 'New hires reach full productivity sooner with personalized learning paths.',
      isPlaceholder: true,
    },
    {
      value: '3x more content discovered (placeholder)',
      label: 'AI search surfaces relevant lessons that used to go unused in the library.',
      isPlaceholder: true,
    },
    {
      value: '25% fewer compliance gaps (placeholder)',
      label: 'Automatic alerts help teams close out required training before deadlines slip.',
      isPlaceholder: true,
    },
  ],
  faq: [
    {
      question: 'What is BizLibrary AI?',
      answer: 'BizLibrary AI is an AI layer on top of your corporate learning library that personalizes recommendations, powers natural-language content search, and gives L&D teams clear visibility into skills and compliance.',
    },
    {
      question: 'Does it replace our existing course library?',
      answer: 'No. BizLibrary AI works with the content you already have, organizing and surfacing it more intelligently rather than requiring you to rebuild your catalog.',
    },
    {
      question: 'How does the AI decide what to recommend?',
      answer: 'It looks at each employee\'s role, stated goals, and skill gaps, then matches them against your content library to suggest the most relevant next steps.',
    },
    {
      question: 'Is our training and employee data secure?',
      answer: 'Yes. Employee and course data stays within your organization\'s environment and is used only to power recommendations and reporting for your teams.',
    },
    {
      question: 'How do we get started?',
      answer: 'Request a demo using the button above and our team will walk through your current content, your goals, and a rollout plan tailored to your organization.',
    },
  ],
  demoCtaHref: 'mailto:demo@bizlibraryai.example?subject=Request%20a%20demo',
  contactEmailHref: 'mailto:hello@bizlibraryai.example',
}
