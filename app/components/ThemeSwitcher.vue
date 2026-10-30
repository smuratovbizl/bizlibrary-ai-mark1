<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'
import { themeOptions } from '../composables/useThemeOptions'

const colorMode = useColorMode()

const selected = computed({
  get: () => themeOptions.find(option => option.value === colorMode.preference) ?? themeOptions[0],
  set: (option) => {
    colorMode.preference = option.value
  },
})
</script>

<template>
  <ClientOnly>
    <USelectMenu
      v-model="selected"
      :items="themeOptions"
      :icon="selected?.icon"
      aria-label="Change theme"
    />

    <template #fallback>
      <USelectMenu
        :items="themeOptions"
        :model-value="themeOptions[0]"
        :icon="themeOptions[0].icon"
        disabled
      />
    </template>
  </ClientOnly>
</template>
