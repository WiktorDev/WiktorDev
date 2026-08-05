<script setup lang="ts">
import {ArrowUpRight} from "@lucide/vue";
import ProjectVisual from "./ProjectVisual.vue";

defineProps<{
  project: any;
  onOpen: (project: any) => void;
}>()
</script>
<template>
  <article class="group grid gap-8 rounded-3xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
    <div class="order-2 lg:order-1">
      <div class="flex items-center gap-3">
        <span class="font-mono text-xs text-primary/80">{{ project.number }}</span>
        <span class="h-px flex-1 bg-border" />
        <span class="font-mono text-[11px] text-muted-foreground">{{ project.category }}</span>
      </div>

      <h3 class="mt-5 text-2xl font-semibold sm:text-3xl">{{ project.name }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {{ project.description }}
      </p>

      <p class="mt-5 rounded-xl border border-border bg-background/40 p-4 text-sm text-foreground/85">
        <span class="mono-label mb-1 block">key result</span>
        {{ project.highlight }}
      </p>

      <ul class="mt-5 flex flex-wrap gap-2">
        <li v-for="tech in project.stack" class="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
          {{ tech }}
        </li>
      </ul>
      <button
          type="button"
          @click="() => onOpen(project)"
          class="mt-7 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        View case study
        <ArrowUpRight class="size-4" />
      </button>
    </div>

    <div class="order-1 lg:order-2">
      <ProjectVisual :project="project"/>
    </div>
  </article>
</template>