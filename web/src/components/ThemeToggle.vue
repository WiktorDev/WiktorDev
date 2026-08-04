<template>
  <button
    type="button"
    class="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
    @click="toggle"
  >
    <Sun v-if="isDark" class="size-4" />
    <Moon v-else class="size-4" />
  </button>
</template>
<script setup lang="ts">
import { Sun, Moon } from "@lucide/vue";
import {useTheme} from "../composables/useTheme.ts";

const { toggle, isDark } = useTheme();
</script>