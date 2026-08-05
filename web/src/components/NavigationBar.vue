<template>
  <header
      class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      :class="[scrolled ? 'border-b border-border bg-background/70 backdrop-blur-xl' : 'border-b border-transparent']"
  >
    <div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
      <a href="/#home" class="group flex items-center gap-3">
        <span class="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary">
          {{ profile.monogram }}
        </span>
        <span class="hidden text-sm font-semibold tracking-tight sm:block">{{ profile.name }}</span>
      </a>
      <nav class="hidden items-center gap-1 lg:flex">
        <a
            v-for="link in $tm('navLinks') as any[]"
            :key="link.href"
            :href="link.href"
            class="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
<!--          <span class="hidden items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground md:inline-flex">-->
<!--            <span class="relative flex size-2">-->
<!--              <span class="absolute inline-flex size-2 animate-blink rounded-full bg-signal" />-->
<!--              <span class="relative inline-flex size-2 rounded-full bg-signal/80" />-->
<!--            </span>-->
<!--            {{ profile.availability }}-->
<!--          </span>-->
<!--        <a href="#contact" class="hidden rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex">-->
<!--          Contact-->
<!--        </a>-->
        <ThemeToggle />
        <LanguageSelector/>
        <button
            type="button"
            @click="open = !open"
            class="grid size-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
        >
          <X v-if="open" class="size-4" />
          <Menu v-else class="size-4" />
        </button>
      </div>

      <nav v-if="open" class="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
        <ul class="flex flex-col">
          <li v-for="link in $tm('navLinks') as any[]" :key="link.href">
            <a :href="link.href" @click="open = false" class="block rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import { Menu, X } from '@lucide/vue';
import ThemeToggle from "./ThemeToggle.vue";
import {usePortfolio} from "../composables/usePortfolio.ts";
import LanguageSelector from "./LanguageSelector.vue";

const { profile } = usePortfolio();
const scrolled = ref<boolean>(false);
const open = ref(false);

const onScroll = () => scrolled.value = window.scrollY > 24;

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>