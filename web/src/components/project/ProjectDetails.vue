<script setup lang="ts">
import { X, ArrowUpRight } from '@lucide/vue';
import ProjectVisual from "./ProjectVisual.vue";
import Block from "../ui/Block.vue";
import ArchitectureChain from "../ui/ArchitectureChain.vue";
import List from "../ui/List.vue";

defineProps<{
  project: any,
  onClose: () => void;
}>()
</script>
<template>
  <div
    class="fixed inset-0 z-60 flex justify-end"
    role="dialog"
    aria-modal="true"
    :aria-label="`${project.name} case study`"
  >
    <button
      type="button"
      aria-label="Close case study"
      @click="onClose"
      class="absolute inset-0 animate-in fade-in bg-background/80 backdrop-blur-sm duration-300"
    />

    <div class="relative flex h-full w-full max-w-3xl animate-in slide-in-from-right flex-col border-l border-border bg-surface duration-400">
      <header class="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-9">
        <div>
          <p class="mono-label">case study · {{ project.number }}</p>
          <h2 class="mt-2 text-2xl font-semibold sm:text-3xl">{{ project.name }}</h2>
          <p class="mt-1 font-mono text-[11px] text-primary/80">{{ project.category }}</p>
        </div>
        <button type="button" @click="onClose" class="grid size-9 shrink-0 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary">
          <X class="size-4" />
        </button>
      </header>

      <div class="flex-1 space-y-7 overflow-y-auto px-6 py-8 sm:px-9">
        <ProjectVisual :project="project" />

        <p class="text-base leading-relaxed text-foreground/90">{{ project.overview }}</p>

        <Block title="the challenge">
          <p>{{ project.problem }}</p>
          <p class="mt-3">{{ project.challenge }}</p>
        </Block>

        <Block title="architecture">
          <ArchitectureChain :nodes="project.architecture" class="mb-4" />
          <p>{{ project.solution }}</p>
        </Block>

        <Block title="engineering decisions">
          <List :items="project.decisions" />
        </Block>

        <Block title="responsibilities">
          <List :items="project.responsibilities" />
        </Block>

        <Block title="infrastructure & deployment">
          <List :items="project.infrastructure" />
        </Block>

        <Block title="outcome">
          <List :items="project.outcome" />
        </Block>

        <Block title="technology stack">
          <ul class="flex flex-wrap gap-2">
            <li v-for="tech in project.stack" class="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px]">
              {{ tech }}
            </li>
          </ul>
        </Block>

        <div class="flex flex-wrap gap-3 border-t border-border pt-7">
          <a v-for="link in project.links" :href="link.href" class="inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary">
            {{ link.label }}
            <ArrowUpRight class="size-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>