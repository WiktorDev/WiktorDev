<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import SectionHeading from "../ui/SectionHeading.vue";
import {usePortfolio} from "../../composables/usePortfolio.ts";

const itemRefs = ref<(HTMLLIElement | null)[]>([]);
const activeIndex = ref(0);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeIndex.value = Number((entry.target as HTMLElement).dataset.index);
      }
    });
  }, {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0,
  });
  itemRefs.value.forEach((el) => {
    if (el) observer?.observe(el);
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});

const { experience } = usePortfolio()
</script>
<template>
  <section id="experience" class="relative py-24 sm:py-32">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <SectionHeading
          :eyebrow="$t('sections.experience.eyebrow')"
          :title="$t('sections.experience.title')"
      />
      <ol class="relative mt-14 border-l border-border pl-6 sm:pl-10">
        <li
          v-for="(item, i) in experience"
          :key="item.period"
          :data-index="i"
          :ref="(el) => (itemRefs[i] = el as HTMLLIElement)"
          class="relative pb-10 last:pb-0"
        >
          <span
            aria-hidden="true"
            class="absolute -left-7.25 top-2 size-2.5 rounded-full border transition-all duration-500 sm:-left-11.25"
            :class="[activeIndex === i ? 'scale-125 border-primary bg-primary shadow-[0_0_0_6px_oklch(0.66_0.19_289/12%)]' : 'border-border bg-surface-raised'] "
          />

          <div class="rounded-2xl border p-6 transition-all duration-500 sm:p-7" :class="[activeIndex === i ? 'border-primary/30 bg-surface' : 'border-border bg-surface/40 opacity-70']">
            <p class="mono-label">{{ item.period }}</p>
            <h3 class="mt-3 text-lg font-semibold sm:text-xl">
              {{ item.role }}
              <span class="text-muted-foreground">
                — {{ item.company }}
              </span>
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{{ item.description }}</p>
            <p class="mt-4 border-l-2 border-primary/40 pl-3 text-sm text-foreground/85">
              {{ item.achievement }}
            </p>
            <ul class="mt-5 flex flex-wrap gap-2">
              <li v-for="tech in item.tech" class="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                {{ tech }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
