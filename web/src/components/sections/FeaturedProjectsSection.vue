<script setup lang="ts">
import SectionHeading from "../ui/SectionHeading.vue";
import Reveal from "../ui/Reveal.vue";
import {usePortfolio} from "../../composables/usePortfolio.ts";
import {ref} from "vue";
import ProjectDetails from "../project/ProjectDetails.vue";
import FeaturedProjectCard from "../project/FeaturedProjectCard.vue";
import CompactProjectCard from "../project/CompactProjectCard.vue";

const active = ref();

const [featured, ...rest] = usePortfolio().projects;
</script>
<template>
  <section id="projects" class="relative py-24 sm:py-32">
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <SectionHeading
        :eyebrow="$t('sections.projects.eyebrow')"
        :title="$t('sections.projects.title')"
        :intro="$t('sections.projects.intro')"
      />
      <div class="mt-14 space-y-6">
        <Reveal>
          <FeaturedProjectCard :project="featured" :on-open="(p) => active = p"  />
        </Reveal>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal v-for="(project, i) in rest" :key="project.id" :delay="(i + 1) * 90">
            <CompactProjectCard :project="project" :on-open="(p) => active = p" />
          </Reveal>
        </div>
      </div>
    </div>
    <ProjectDetails v-if="active" :project="active" :on-close="() => active = null"/>
  </section>
</template>