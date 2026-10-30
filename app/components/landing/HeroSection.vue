<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { centerMessages, nextMessageIndex } from '../../composables/useRotatingMessages'
import { landingContent } from '../../composables/useLandingContent'

/**
 * Hero section: the page's single <h1>, a one-sentence value proposition,
 * and the primary "Request a demo" CTA. Also hosts the rotating center
 * message feature (requested in issue #3) as a secondary, fading line
 * beneath the static headline/value-prop, so that feature keeps working
 * without a second hero-like block competing with the new static copy.
 */
const ROTATION_INTERVAL_MS = 3500

const currentMessageIndex = ref(0)
let rotationTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  rotationTimer = setInterval(() => {
    currentMessageIndex.value = nextMessageIndex(currentMessageIndex.value, centerMessages.length)
  }, ROTATION_INTERVAL_MS)
})

onUnmounted(() => {
  clearInterval(rotationTimer)
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
    <div class="hero-intro flex flex-col items-center text-center max-w-2xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-(--ui-text-highlighted)">
        AI-powered learning, built around every employee.
      </h1>
      <p class="mt-4 text-lg text-(--ui-text-muted)">
        BizLibrary AI turns the course library you already have into a personalized, self-updating learning experience for every team.
      </p>
      <UButton
        :href="landingContent.demoCtaHref"
        size="xl"
        class="mt-8"
      >
        Request a demo
      </UButton>

      <Transition name="fade" mode="out-in">
        <p
          :key="currentMessageIndex"
          class="mt-10 text-sm text-(--ui-text-toned)"
        >
          {{ centerMessages[currentMessageIndex] }}
        </p>
      </Transition>
    </div>
  </section>
</template>
