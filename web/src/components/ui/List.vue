<script setup lang="ts">
defineProps<{ items: string[]; }>()
</script>
<template>
  <ul class="space-y-2">
    <li v-for="item in items" class="flex gap-3">
      <span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true"/>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>