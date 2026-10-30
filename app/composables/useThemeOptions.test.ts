import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { themeOptions } from './useThemeOptions'

const BUILT_IN_THEMES = new Set(['light', 'dark'])

describe('themeOptions', () => {
  it('offers light and dark modes plus exactly one surprise theme', () => {
    const values = themeOptions.map(option => option.value)

    expect(values).toContain('light')
    expect(values).toContain('dark')
    expect(values).toHaveLength(3)
  })

  it('gives every theme a unique, non-empty label and icon', () => {
    const labels = themeOptions.map(option => option.label)

    expect(new Set(labels).size).toBe(themeOptions.length)
    for (const option of themeOptions) {
      expect(option.label.length).toBeGreaterThan(0)
      expect(option.icon.length).toBeGreaterThan(0)
    }
  })

  it('defines a CSS class for every custom (non-built-in) theme', () => {
    const mainCss = readFileSync(
      fileURLToPath(new URL('../assets/css/main.css', import.meta.url)),
      'utf-8',
    )
    const customThemes = themeOptions.filter(option => !BUILT_IN_THEMES.has(option.value))

    expect(customThemes.length).toBeGreaterThan(0)
    for (const theme of customThemes) {
      expect(mainCss).toContain(`.${theme.value} {`)
    }
  })
})
