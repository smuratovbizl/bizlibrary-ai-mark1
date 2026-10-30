/**
 * The center-stage messages the landing page's hero text fades through in a
 * loop, requested in https://github.com/smuratovbizl/bizlibrary-ai-mark1/issues/3.
 * The first entry is the original hero message; rotation loops back to it
 * after the last one.
 */
export const centerMessages: string[] = [
  'Hi this was made through your agent AIR',
  'Built by agents, shipped while you slept',
  'From issue to pull request, no hands required',
]

export function nextMessageIndex(currentIndex: number, total: number): number {
  if (total <= 0) {
    return 0
  }

  return (currentIndex + 1) % total
}
