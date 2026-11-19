<script setup lang="ts">
import HudBackground from "./components/HudBackground.vue";
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Education from "./components/Education.vue";
import Certifications from "./components/Certifications.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <HudBackground />
  <NavBar />
  <main>
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Certifications />
    <Contact />
  </main>
</template>
