<template>
  <RouterView/>
</template>
<script setup lang="ts">
import {useTheme} from "./composables/useTheme.ts";

useTheme()
</script>