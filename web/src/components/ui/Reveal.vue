<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import {useReveal} from "../../composables/useReveal.ts";

interface Props {
  class?: HTMLAttributes["class"];
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  as: "div",
});

// @ts-expect-error TS6133
const { ref: elementRef, visible } = useReveal<HTMLElement>();

const revealStyle = computed(() => ({
  transitionDelay: `${props.delay}ms`,
}));
</script>
<template>
  <component
    :is="as"
    ref="elementRef"
    :data-visible="visible"
    :style="revealStyle"
    :class="['reveal', $props.class]"
  >
    <slot />
  </component>
</template>