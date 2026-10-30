<script setup lang="ts">
import { landingContent } from '../../composables/useLandingContent'

/**
 * Final CTA section: repeats the same primary "Request a demo" button as
 * the hero (same landingContent.demoCtaHref, one shared constant) alongside
 * a separate contact email link.
 */
</script>

<template>
  <section class="px-4 sm:px-6 py-16">
    <div class="max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
      <h2 class="text-2xl sm:text-3xl font-bold text-(--ui-text-highlighted)">
        Ready to see BizLibrary AI in action?
      </h2>
      <p class="text-base text-(--ui-text-muted)">
        Request a personalized demo and we'll show you how it works with your own content library.
      </p>
      <UButton
        :href="landingContent.demoCtaHref"
        size="xl"
      >
        Request a demo
      </UButton>
      <a
        :href="landingContent.contactEmailHref"
        class="text-sm text-(--ui-text-muted) underline underline-offset-4 hover:text-(--ui-text-highlighted)"
      >
        Or email us directly
      </a>
    </div>
  </section>
</template>
