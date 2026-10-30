import { describe, expect, it } from 'vitest'
import { landingContent } from './useLandingContent'

/**
 * Acceptance criteria for the redesigned landing page content, from
 * https://github.com/smuratovbizl/bizlibrary-ai-mark1/issues/5.
 *
 * This suite only covers the parts of the acceptance criteria that are
 * testable as plain data/pure functions (this repo's vitest config runs with
 * `environment: 'node'`, no jsdom/@vue-test-utils, so rendered Vue components
 * and UI behavior like "collapsible" are out of scope here). Section
 * presence/order and actual rendering are expected to be covered separately
 * (e.g. visually or in an e2e/component test suite), not in this file.
 *
 * Expected shape of `./useLandingContent` (not yet implemented):
 *
 * export interface LandingFeature {
 *   icon: string
 *   title: string
 *   description: string
 * }
 *
 * export interface HowItWorksStep {
 *   title: string
 *   description: string
 * }
 *
 * export interface LandingBenefit {
 *   value: string
 *   label: string
 *   isPlaceholder: boolean // true => `value` is a placeholder figure, not real data
 * }
 *
 * export interface FaqItem {
 *   question: string
 *   answer: string
 * }
 *
 * export interface LandingContent {
 *   features: LandingFeature[]
 *   howItWorksSteps: HowItWorksStep[]
 *   benefits: LandingBenefit[]
 *   faq: FaqItem[]
 *   demoCtaHref: string
 *   contactEmailHref: string
 * }
 *
 * export const landingContent: LandingContent
 */

/** Every copy string across the content, for the shared lorem-ipsum guard. */
function allCopyStrings(): string[] {
  return [
    ...landingContent.features.flatMap(feature => [feature.title, feature.description]),
    ...landingContent.howItWorksSteps.flatMap(step => [step.title, step.description]),
    ...landingContent.benefits.flatMap(benefit => [benefit.label, benefit.value]),
    ...landingContent.faq.flatMap(item => [item.question, item.answer]),
  ]
}

describe('landingContent.features', () => {
  it('offers between 4 and 6 feature cards', () => {
    expect(landingContent.features.length).toBeGreaterThanOrEqual(4)
    expect(landingContent.features.length).toBeLessThanOrEqual(6)
  })

  it('gives every feature a non-empty icon, title, and description', () => {
    for (const feature of landingContent.features) {
      expect(feature.icon.length).toBeGreaterThan(0)
      expect(feature.title.length).toBeGreaterThan(0)
      expect(feature.description.length).toBeGreaterThan(0)
    }
  })

  it('gives every feature a unique title', () => {
    const titles = landingContent.features.map(feature => feature.title)
    expect(new Set(titles).size).toBe(titles.length)
  })
})

describe('landingContent.howItWorksSteps', () => {
  it('defines exactly 3 steps', () => {
    expect(landingContent.howItWorksSteps).toHaveLength(3)
  })

  it('gives every step a non-empty title and description', () => {
    for (const step of landingContent.howItWorksSteps) {
      expect(step.title.length).toBeGreaterThan(0)
      expect(step.description.length).toBeGreaterThan(0)
    }
  })
})

describe('landingContent.benefits', () => {
  it('defines exactly 3 headline benefits', () => {
    expect(landingContent.benefits).toHaveLength(3)
  })

  it('gives every benefit a non-empty value and label', () => {
    for (const benefit of landingContent.benefits) {
      expect(benefit.value.length).toBeGreaterThan(0)
      expect(benefit.label.length).toBeGreaterThan(0)
    }
  })

  it('marks every benefit figure as a placeholder', () => {
    for (const benefit of landingContent.benefits) {
      expect(benefit.isPlaceholder).toBe(true)
    }
  })
})

describe('landingContent.faq', () => {
  it('defines exactly 5 questions', () => {
    expect(landingContent.faq).toHaveLength(5)
  })

  it('gives every question a unique, non-empty text', () => {
    const questions = landingContent.faq.map(item => item.question)
    expect(new Set(questions).size).toBe(questions.length)
    for (const question of questions) {
      expect(question.length).toBeGreaterThan(0)
    }
  })

  it('gives every question a non-empty answer', () => {
    for (const item of landingContent.faq) {
      expect(item.answer.length).toBeGreaterThan(0)
    }
  })
})

describe('landingContent CTA targets', () => {
  it('defines a non-empty demo CTA href as a plain string', () => {
    expect(typeof landingContent.demoCtaHref).toBe('string')
    expect(landingContent.demoCtaHref.length).toBeGreaterThan(0)
  })

  it('defines a non-empty contact email href that uses the mailto scheme', () => {
    expect(typeof landingContent.contactEmailHref).toBe('string')
    expect(landingContent.contactEmailHref.length).toBeGreaterThan(0)
    expect(landingContent.contactEmailHref).toMatch(/^mailto:/)
  })

  it('keeps the demo CTA and contact email targets distinct', () => {
    // Hero and final-CTA sections must both render the SAME demoCtaHref (one
    // shared constant), while the final section's separate contact email
    // link must point somewhere else entirely.
    expect(landingContent.demoCtaHref).not.toBe(landingContent.contactEmailHref)
  })
})

describe('landingContent copy', () => {
  it('contains no lorem-ipsum placeholder text anywhere', () => {
    for (const copy of allCopyStrings()) {
      expect(copy.toLowerCase()).not.toContain('lorem')
    }
  })
})
