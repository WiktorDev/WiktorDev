<script setup lang="ts">
import SectionHeading from "../ui/SectionHeading.vue";
import Reveal from "../ui/Reveal.vue";
import {usePortfolio} from "../../composables/usePortfolio.ts";

const {techCategories} = usePortfolio()
</script>
<template>
  <section id="stack" class="relative py-24 sm:py-28">
    <div class="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <SectionHeading
        :eyebrow="$t('sections.stack.eyebrow')"
        :title="$t('sections.stack.title')"
        :intro="$t('sections.stack.intro')"
      />
      <div class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        <Reveal v-for="(category, i) in techCategories" :key="category.id" :delay="i * 70">
          <div class="h-full bg-surface/70 p-6 sm:p-7">
            <div class="flex items-baseline justify-between gap-4">
              <h3 class="text-base font-semibold">{{ category.title }}</h3>
              <span class="font-mono text-[11px] text-muted-foreground">
                {{ String(i + 1).padStart(2, "0") }}
              </span>
            </div>
            <p class="mt-2 text-sm text-muted-foreground">{{ category.summary }}</p>
            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-for="item in category.items" class="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {{ item }}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>