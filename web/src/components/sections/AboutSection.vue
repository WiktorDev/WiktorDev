<script setup lang="ts">
import Reveal from "../ui/Reveal.vue";
import SectionHeading from "../ui/SectionHeading.vue";
import {usePortfolio} from "../../composables/usePortfolio.ts";

const { about, focusAreas } = usePortfolio()
</script>
<template>
  <section id="about" class="relative py-24 sm:py-28">
    <div class="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <SectionHeading eyebrow="about" title="Who I am, and how I work."/>
      <div class="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
        <Reveal>
          <div class="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p v-for="p in about.paragraphs">{{ p }}</p>
          </div>
        </Reveal>
        <Reveal :delay="120">
          <dl class="rounded-2xl border border-border bg-surface/50 p-6">
            <div v-for="fact in about.facts" class="border-b border-border py-3 first:pt-0 last:border-0 last:pb-0">
              <dt class="mono-label">{{ fact.label }}</dt>
              <dd class="mt-1.5 text-sm text-foreground">{{ fact.value }}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
      <div class="mt-14 grid gap-5 md:grid-cols-3">
        <Reveal v-for="(area, i) in focusAreas" :key="area.id" :delay="i * 90">
          <article class="h-full rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-primary/30">
            <h3 class="text-lg font-semibold">{{ area.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{{ area.body }}</p>
            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-for="point in area.points" class="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {{ point }}
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>