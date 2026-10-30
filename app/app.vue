<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { centerMessages, nextMessageIndex } from './composables/useRotatingMessages'

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
  <UApp>
    <div class="min-h-screen flex items-center justify-center">
      <ThemeSwitcher class="absolute top-4 right-4" />
      <div class="hero-intro flex flex-col items-center text-center">
        <Transition name="fade" mode="out-in">
          <p
            :key="currentMessageIndex"
            class="text-2xl font-semibold text-(--ui-text-highlighted)"
          >
            {{ centerMessages[currentMessageIndex] }}
          </p>
        </Transition>
        <!-- Static tagline beneath the rotating message, muted to stay
             secondary to the hero text above. -->
        <p class="mt-3 text-sm text-(--ui-text-muted)">
          A small demo page, rebuilt one agent run at a time.
        </p>
      </div>
    </div>
  </UApp>
</template>
