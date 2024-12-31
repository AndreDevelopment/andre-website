<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">

import type { ProjectInformation } from "../data/dataProjects";


const props = defineProps({
  project: {
    type: Object as () => ProjectInformation, 
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="project-card">
    <h1>{{ props.project.name }}</h1>
    <p>{{ props.project.description }}</p>
    <!-- <p>{{props.techStack}}</p>
    <img src={{props.image}}>
    <a href={{props.imageURL}}>Link</a> -->
  </div>
</template>
<!-- STYLING -->
<style>
#project-card {
  color: black;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
