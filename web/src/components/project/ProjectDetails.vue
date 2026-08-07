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
  <div class="fixed inset-0 z-60 flex justify-end">
    <button
      type="button"
      @click="onClose"
      class="absolute inset-0 animate-in fade-in bg-background/80 backdrop-blur-sm duration-300"
    />
    <div class="relative flex h-full w-full max-w-3xl animate-in slide-in-from-right flex-col border-l border-border bg-surface duration-400">
      <header class="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-9">
        <div>
          <p class="mono-label">{{ $t('sections.projects.caseStudy') }} · {{ project.number }}</p>
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

        <Block :title="$t('sections.projects.challenge')">
          <p>{{ $t(`projects.${project.id}.problem`) }}</p>
          <p class="mt-3">{{ $t(`projects.${project.id}.challenge`) }}</p>
        </Block>
        <Block :title="$t('sections.projects.architecture')">
          <ArchitectureChain :nodes="project.architecture" class="mb-4" />
          <p class="mt-3">{{ $t(`projects.${project.id}.solution`) }}</p>
        </Block>
        <Block v-if="project.decisions().length" :title="$t('sections.projects.decisions')">
          <List :items="project.decisions()" />
        </Block>
        <Block v-if="project.responsibilities().length" :title="$t('sections.projects.responsibilities')">
          <List :items="project.responsibilities()" />
        </Block>
        <Block v-if="project.infrastructure().length" :title="$t('sections.projects.infrastructure')">
          <List :items="project.infrastructure()" />
        </Block>
        <Block v-if="project.outcome().length" :title="$t('sections.projects.outcome')">
          <List :items="project.outcome()" />
        </Block>
        <Block :title="$t('sections.projects.stack')">
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