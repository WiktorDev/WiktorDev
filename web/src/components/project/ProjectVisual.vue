<script setup lang="ts">
defineProps<{ project: any }>()
</script>
<template>
  <div class="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-border bg-background/70">
    <template v-if="project.image">
      <img
          :src="project.image"
          :alt="`${project.name} project screenshot`"
          loading="lazy"
          class="absolute inset-0 size-full object-cover"
      />
      <div
          class="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-background/55"
          aria-hidden
      />
    </template>
    <template v-else>
      <div class="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true"/>
      <div class="pointer-events-none absolute -left-10 top-1/3 size-52 rounded-full bg-primary/15 blur-3xl" />
      <div class="pointer-events-none absolute -right-10 bottom-0 size-52 rounded-full bg-violet/15 blur-3xl" />
    </template>

    <div class="relative flex h-full flex-col justify-between p-5">
      <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>project {{ project.number }}</span>
        <span class="flex items-center gap-1.5">
          <span class="size-1.5 animate-blink rounded-full bg-signal" /> live
        </span>
      </div>

      <svg v-if="!project.image" viewBox="0 0 320 120" class="w-full" aria-hidden="true">
        <g v-for="row in [0,1,2]" key={row}>
          <line
              x1="10"
              :y1="20 + row * 40"
              x2="310"
              :y2="20 + row * 40"
              stroke="oklch(0.95 0.006 300 / 0.1)"
              stroke-width="1"
          />
          <line
              x1="10"
              :y1="20 + row * 40"
              x2="310"
              :y2="20 + row * 40"
              stroke="oklch(0.66 0.19 289)"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-dasharray="10 26"
              :style="{ animation: `dash-flow ${3.2 + row * 0.6}s linear infinite` }"
          />
          <circle
              v-for="cx in [40, 150, 260]"
              :key="cx"
              :cx="cx"
              :cy="20 + row * 40"
              r="3.5"
              fill="oklch(0.25 0.052 292)"
              stroke="oklch(0.66 0.19 289 / 0.6)"
          />
        </g>
      </svg>
      <p class="font-mono text-[11px] text-muted-foreground">{{ project.name }}</p>
    </div>
  </div>
</template>