<script setup lang="ts">
const currentYear = new Date().getFullYear()

// These are placeholder links only: this is a single-page marketing site
// with no additional pages yet, so "Privacy Policy", "Terms", and "Careers"
// are plain `#` anchors rather than links to real pages.
</script>

<template>
  <footer class="px-4 sm:px-6 py-8 border-t border-(--ui-border)">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-(--ui-text-muted)">
      <p>&copy; {{ currentYear }} BizLibrary AI. All rights reserved.</p>
      <nav class="flex items-center gap-4">
        <a href="#" class="hover:text-(--ui-text-highlighted)">Privacy Policy</a>
        <a href="#" class="hover:text-(--ui-text-highlighted)">Terms</a>
        <a href="#" class="hover:text-(--ui-text-highlighted)">Careers</a>
      </nav>
    </div>
  </footer>
</template>
