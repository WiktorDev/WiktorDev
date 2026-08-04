<script setup lang="ts">
import Reveal from "./Reveal.vue";

defineProps<{
  align?: "center",
  eyebrow: string,
  title: string,
  intro?: string,
}>()
</script>
<template>
  <Reveal class="max-w-3xl" :class="[align === 'center' ? 'mx-auto text-center' : '']">
    <p class="mono-label flex items-center gap-3">
      <span class="inline-block h-px w-8 bg-primary/60" aria-hidden="true"/>
      {{ eyebrow }}
    </p>
    <h2 class="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p v-if="intro" class="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
      {{ intro }}
    </p>
  </Reveal>
</template>