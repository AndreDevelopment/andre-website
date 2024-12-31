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
  <div id="project-card">
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
  height: 300px;
  width: 700px;
  color: black;
  border: black 2px solid;
  border-radius: 2px;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
