<template>
  <span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider" :class="config.badgeClass">
    <span class="size-1.5 rounded-full" :class="[config.dotClass, config.animate]"></span>
    {{ $t(`statuses.${status}`) }}
  </span>
</template>
<script setup lang="ts">
import type {ProjectStatus} from "@/types";
import {computed} from "vue";

const props = defineProps<{
  status: ProjectStatus;
}>()

const config = computed(() => statusConfig[props.status]);

const statusConfig: Record<ProjectStatus, {
  dotClass: string;
  badgeClass: string;
  animate?: string;
}> = {
  live: {
    dotClass: "bg-emerald-500",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-950/30 dark:text-emerald-400",
    animate: "animate-pulse",
  },
  developing: {
    dotClass: "bg-primary",
    badgeClass: "border-primary/30 bg-primary/10 text-primary",
    animate: "animate-pulse",
  },
  ended: {
    dotClass: "bg-muted-foreground",
    badgeClass: "border-border bg-secondary text-muted-foreground",
  },
  suspended: {
    dotClass: "bg-amber-500",
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/40 dark:bg-amber-950/30 dark:text-amber-400",
  },
};
</script>