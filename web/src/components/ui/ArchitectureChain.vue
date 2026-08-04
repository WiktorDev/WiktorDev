<script setup lang="ts">
defineProps<{ nodes: string[] }>()
</script>
<template>
  <ol class="flex flex-wrap items-center gap-2">
    <li v-for="(node, i) in nodes" class="flex items-center gap-2">
      <span class="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[11px] text-primary/90">
        {{ node }}
      </span>
      <span v-if="i < nodes.length - 1" class="relative block h-px w-6 overflow-hidden bg-border" aria-hidden="true">
        <span class="absolute inset-y-0 -left-1/2 w-1/2 animate-sweep bg-primary/70" />
      </span>
    </li>
  </ol>
</template>