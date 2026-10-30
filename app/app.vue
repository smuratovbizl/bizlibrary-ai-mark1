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
      <Transition name="fade" mode="out-in">
        <p
          :key="currentMessageIndex"
          class="text-2xl font-semibold text-(--ui-text-highlighted)"
        >
          {{ centerMessages[currentMessageIndex] }}
        </p>
      </Transition>
    </div>
  </UApp>
</template>
