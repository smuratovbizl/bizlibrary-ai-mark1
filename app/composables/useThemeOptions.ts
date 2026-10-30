export type ThemeMode = 'light' | 'dark' | 'synthwave'

export interface ThemeOption {
  value: ThemeMode
  label: string
  icon: string
}

/**
 * The themes offered by the landing page's theme switcher: the standard
 * light/dark pair plus "synthwave", the surprise third theme requested in
 * https://github.com/smuratovbizl/bizlibrary-ai-mark1/issues/1.
 * Each `value` must match a class defined in app/assets/css/main.css.
 */
export const themeOptions: ThemeOption[] = [
  { value: 'light', label: 'Light', icon: 'i-lucide-sun' },
  { value: 'dark', label: 'Dark', icon: 'i-lucide-moon' },
  { value: 'synthwave', label: 'Synthwave', icon: 'i-lucide-sparkles' },
]
