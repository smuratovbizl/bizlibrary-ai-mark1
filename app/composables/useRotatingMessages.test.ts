import { describe, expect, it } from 'vitest'
import { centerMessages, nextMessageIndex } from './useRotatingMessages'

describe('centerMessages', () => {
  it('offers the original hero message plus exactly two others to loop through', () => {
    expect(centerMessages).toContain('Hi this was made through your agent AIR')
    expect(centerMessages).toHaveLength(3)
  })

  it('gives every message unique, non-empty text', () => {
    expect(new Set(centerMessages).size).toBe(centerMessages.length)
    for (const message of centerMessages) {
      expect(message.length).toBeGreaterThan(0)
    }
  })
})

describe('nextMessageIndex', () => {
  it('advances to the next index', () => {
    expect(nextMessageIndex(0, 3)).toBe(1)
    expect(nextMessageIndex(1, 3)).toBe(2)
  })

  it('loops back to the first message after the last one', () => {
    expect(nextMessageIndex(2, 3)).toBe(0)
  })

  it('stays at 0 when there are no messages to cycle through', () => {
    expect(nextMessageIndex(0, 0)).toBe(0)
  })
})
