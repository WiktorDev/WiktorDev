<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from "vue";
import { Languages, Check } from "@lucide/vue";
import {useI18n} from "vue-i18n";

const open = ref(false);
const containerRef = ref<HTMLDivElement | null>(null);

const { availableLocales, t, locale } = useI18n()

const onClickOutside = (e: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    open.value = false;
  }
};

watch(open, (isOpen) => {
  if (isOpen) document.addEventListener("mousedown", onClickOutside);
  else document.removeEventListener("mousedown", onClickOutside);
});

onBeforeUnmount(() => document.removeEventListener("mousedown", onClickOutside));

const selectLanguage = (code: string) => {
  locale.value = code;
  open.value = false;
};
</script>
<template>
  <div ref="containerRef" class="relative">
    <button type="button" @click="open = !open" class="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
      <Languages class="size-4" />
    </button>
    <div v-if="open" class="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-lg border border-border bg-surface/95 p-1 shadow-panel backdrop-blur-xl">
      <button
        v-for="code in availableLocales"
        :key="code"
        type="button"
        @click="selectLanguage(code)"
        class="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors"
        :class="[locale === code ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground']"
      >
        <span>{{ t(`locales.${code}`) }}</span>
        <Check v-if="locale === code" class="size-3.5" />
      </button>
    </div>
  </div>
</template>
