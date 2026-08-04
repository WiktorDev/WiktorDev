<script setup lang="ts">
import NavigationBar from "../components/NavigationBar.vue";
import HeroSection from "../components/sections/HeroSection.vue";
import AboutSection from "../components/sections/AboutSection.vue";
import FeaturedProjectsSection from "../components/sections/FeaturedProjectsSection.vue";
import ExperienceTimelineSection from "../components/sections/ExperienceTimelineSection.vue";
import TechStackSection from "../components/sections/TechStackSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="min-h-screen bg-background">
    <NavigationBar/>
    <main>
      <HeroSection/>
      <AboutSection/>
      <FeaturedProjectsSection/>
      <ExperienceTimelineSection/>
      <TechStackSection/>
      <ContactSection/>
    </main>
    <Footer/>
  </div>
</template>