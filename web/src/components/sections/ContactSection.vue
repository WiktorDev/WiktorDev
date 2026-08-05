<script setup lang="ts">
import Reveal from "../ui/Reveal.vue";
import {usePortfolio} from "../../composables/usePortfolio.ts";
import { Mail } from '@lucide/vue';

const { profile } = usePortfolio()

const secondary = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "WhatsApp", href: profile.whatsapp },
];
</script>
<template>
  <section id="contact" class="relative py-24 sm:py-32">
    <div class="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <Reveal>
        <div class="panel relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
          <div class="pointer-events-none absolute left-1/2 top-0 h-64 w-140 -translate-x-1/2 rounded-full bg-primary/12 blur-[100px]" aria-hidden="true"/>
          <div class="grid-backdrop pointer-events-none absolute inset-0 opacity-60" aria-hidden="true"/>
          <div class="relative">
            <p class="mono-label">{{ $t('sections.contact.eyebrow') }}</p>
            <h2 class="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-5xl">
              {{ $t('sections.contact.title') }}
            </h2>
            <p class="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {{ $t('sections.contact.intro') }}
            </p>
            <div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a :href="`mailto:${profile.email}`" class="accent-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto">
                <Mail class="size-4" />
                {{ $t('sections.contact.buttons.email') }}
              </a>
              <template v-for="({ label, href }) in secondary">
                <a :href="href" class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/40 px-7 py-4 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary sm:w-auto">
                  <!--                <Icon class="size-4" />-->
                  {{ label }}
                </a>
              </template>
            </div>
            <p class="mt-8 font-mono text-[11px] leading-relaxed text-muted-foreground">
              {{ profile.email }}
            </p>
            <p class="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              {{ $t('sections.contact.description') }}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</template>