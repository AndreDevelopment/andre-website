<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import{ projectData }from '../data/dataProjects'
import type { ProjectInformation } from "../data/dataProjects";
import ProjectCard from '../components/ProjectCard.vue'
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="projects">
    <h1>Projects</h1>
    <ProjectCard v-for="p in projectData.projects" :project="p as unknown as ProjectInformation" />
  </div>
</template>
<!-- STYLING -->
<style>

h1 {
  height: 2em;
  width: 2em;
}

#projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
}

</style>
