<script setup lang="ts">
import { landingContent } from '../../composables/useLandingContent'

/**
 * Benefits/stats section: 3 headline benefits. Every figure here is a
 * placeholder (see the code comment above `benefits` in
 * useLandingContent.ts) and is clearly labeled "(placeholder)" in the
 * rendered value plus a small placeholder badge, so it is never mistaken
 * for a real, sourced metric.
 */
</script>

<template>
  <section class="px-4 sm:px-6 py-16">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-(--ui-text-highlighted)">
        Benefits teams are seeing
      </h2>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="benefit in landingContent.benefits"
          :key="benefit.label"
          class="flex flex-col items-center text-center gap-2 rounded-lg border border-(--ui-border) bg-(--ui-bg) p-6"
        >
          <p class="text-2xl font-bold text-(--ui-primary)">
            {{ benefit.value }}
          </p>
          <UBadge
            v-if="benefit.isPlaceholder"
            color="neutral"
            variant="subtle"
            size="sm"
          >
            placeholder figure
          </UBadge>
          <p class="text-sm text-(--ui-text-muted)">
            {{ benefit.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
