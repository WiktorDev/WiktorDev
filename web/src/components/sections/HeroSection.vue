<script setup lang="ts">
import Reveal from "../ui/Reveal.vue";
import { MapPin, ArrowRight } from '@lucide/vue';
import {usePortfolio} from "../../composables/usePortfolio.ts";

const { profile } = usePortfolio()
</script>
<template>
  <section id="home" class="relative overflow-hidden pt-32 sm:pt-40">
    <div class="grid-backdrop pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute left-1/2 top-0 h-90 w-180 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

    <div class="relative mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        <div class="flex items-center gap-4">
          <span class="grid size-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 font-mono text-lg font-semibold text-primary">
            {{ profile.monogram }}
          </span>
          <div>
            <p class="text-sm font-semibold">{{ profile.name }}</p>
            <p class="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin class="size-3" />
              {{ profile.location }} · {{ profile.role }}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal :delay="80">
        <h1 class="mt-9 text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
          <span class="text-gradient">{{ profile.tagline }}</span>
        </h1>
      </Reveal>

      <Reveal :delay="150">
        <p class="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {{ profile.intro }}
        </p>
      </Reveal>

      <Reveal :delay="220">
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" class="accent-glow group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5">
            {{ $t('sections.hero.projectButton') }}
            <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" class="inline-flex items-center justify-center rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary">
            {{ $t('sections.hero.workWithMe')}}
          </a>
        </div>
      </Reveal>
      <Reveal :delay="290">
        <dl class="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          <div v-for="stat in profile.stats" class="bg-surface/70 px-6 py-6">
            <dt class="text-2xl font-semibold text-foreground sm:text-3xl">
              {{ stat.value }}
            </dt>
            <dd class="mt-1 text-xs text-muted-foreground">{{ stat.label }}</dd>
          </div>
        </dl>
      </Reveal>
    </div>
  </section>
</template>