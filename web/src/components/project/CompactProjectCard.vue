<script setup lang="ts">
import {ArrowUpRight} from "@lucide/vue";
import ProjectVisual from "./ProjectVisual.vue";
import type {Project} from "../../types";

defineProps<{
  project: Project;
  onOpen: (project: Project) => void;
}>()
</script>
<template>
  <article class="group flex flex-col rounded-3xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface sm:p-6">
    <div class="flex items-center gap-3">
      <span class="font-mono text-xs text-primary/80">{{ project.number }}</span>
      <span class="h-px flex-1 bg-border" />
      <span class="font-mono text-[11px] text-muted-foreground">{{ project.category }}</span>
    </div>
    <div class="mt-4">
      <ProjectVisual :project="project" />
    </div>
    <h3 class="mt-5 text-lg font-semibold sm:text-xl">{{ project.name }}</h3>
    <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
      {{ $t(`projects.${project.id}.description`)}}
    </p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li v-for="tech in project.stack.slice(0, 4)" class="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
        {{ tech }}
      </li>
      <li v-if="project.stack.length > 4" class="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
        +{{ project.stack.length - 4 }}
      </li>
    </ul>
    <button
      type="button"
      @click="() => onOpen(project)"
      class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
    >
      {{ $t('sections.projects.viewCaseStudy') }}
      <ArrowUpRight class="size-4" />
    </button>
  </article>
</template>