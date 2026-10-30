<script setup lang="ts">
import { landingContent } from '../../composables/useLandingContent'

/**
 * How it works section: a 3-step numbered flow sourced from
 * useLandingContent.howItWorksSteps.
 */
</script>

<template>
  <section class="px-4 sm:px-6 py-16 bg-(--ui-bg-muted)">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-(--ui-text-highlighted)">
        How it works
      </h2>

      <ol class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <li
          v-for="(step, index) in landingContent.howItWorksSteps"
          :key="step.title"
          class="flex flex-col items-start gap-3 rounded-lg border border-(--ui-border) bg-(--ui-bg) p-6"
        >
          <span
            class="flex size-8 items-center justify-center rounded-full bg-(--ui-primary) text-(--ui-text-inverted) text-sm font-bold"
          >
            {{ index + 1 }}
          </span>
          <h3 class="text-lg font-semibold text-(--ui-text-highlighted)">
            {{ step.title }}
          </h3>
          <p class="text-sm text-(--ui-text-muted)">
            {{ step.description }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
