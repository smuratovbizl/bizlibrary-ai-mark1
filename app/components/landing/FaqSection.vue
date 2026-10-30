<script setup lang="ts">
import { computed } from 'vue'
import { landingContent } from '../../composables/useLandingContent'

/**
 * FAQ section: 5 questions rendered with Nuxt UI's UAccordion, which wraps
 * Reka UI's accessible accordion primitives (expand/collapse on click,
 * Enter/Space, and arrow-key navigation between triggers out of the box).
 */
const faqItems = computed(() =>
  landingContent.faq.map(item => ({
    label: item.question,
    content: item.answer,
  })),
)
</script>

<template>
  <section class="px-4 sm:px-6 py-16 bg-(--ui-bg-muted)">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-bold text-center text-(--ui-text-highlighted)">
        Frequently asked questions
      </h2>

      <UAccordion
        :items="faqItems"
        class="mt-10"
      />
    </div>
  </section>
</template>
