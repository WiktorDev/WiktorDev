<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <section class="border-t border-border pt-7">
    <h3 class="mono-label">{{ title }}</h3>
    <div class="mt-3 text-sm leading-relaxed text-muted-foreground">
      <slot/>
    </div>
  </section>
</template>