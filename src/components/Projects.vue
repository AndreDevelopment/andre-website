<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import{ projectData }from '../data/dataProjects'
import type { ProjectInformation } from "../data/dataProjects";
import ProjectCard from '../components/ProjectCard.vue'
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="projects">
    <ProjectCard v-for="p in projectData.projects" :project="p as unknown as ProjectInformation" />
  </div>
</template>
<!-- STYLING -->
<style>
#projects {
  background-color: white;
}

</style>
