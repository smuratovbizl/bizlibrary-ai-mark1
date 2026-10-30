<script setup lang="ts">
import { landingContent } from '../../composables/useLandingContent'

/**
 * Key features section: a responsive grid of 4-6 feature cards, each with
 * an icon, title, and 1-2 line description sourced from useLandingContent.
 */
</script>

<template>
  <section class="px-4 sm:px-6 py-16">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-(--ui-text-highlighted)">
        Key features
      </h2>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in landingContent.features"
          :key="feature.title"
          class="flex flex-col items-start gap-3 rounded-lg border border-(--ui-border) bg-(--ui-bg) p-6"
        >
          <UIcon :name="feature.icon" class="size-8 text-(--ui-primary)" />
          <h3 class="text-lg font-semibold text-(--ui-text-highlighted)">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-(--ui-text-muted)">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
