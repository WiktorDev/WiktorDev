<script setup lang="ts">
import {usePortfolio} from "../composables/usePortfolio.ts";
import { ArrowUp } from '@lucide/vue';

const { profile } = usePortfolio()

const links = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` }
]
</script>
<template>
  <footer class="border-t border-border py-12">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-sm font-semibold">
          {{ profile.name }} — {{ profile.role }}
        </p>
        <p class="mt-2 max-w-md text-sm text-muted-foreground">
          {{ $t('sections.footer.description') }}
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-5">
        <a v-for="link in links" :href="link.href" class="text-sm text-muted-foreground transition-colors hover:text-primary">
          {{ link.label }}
        </a>
        <a href="/#home" class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
          <ArrowUp class="size-3.5" />
          {{ $t('sections.footer.backTop') }}
        </a>
      </div>
    </div>
  </footer>
</template>