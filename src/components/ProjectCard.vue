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
    <p v-for="t in props.project.techStack">{{t}}</p>
    <img class="project-image" :src="props.project.imageURL">
    <a :href="props.project.projectURL" target="blank">Link</a>
  </div>
</template>
<!-- STYLING -->
<style>
#project-card {
  height: 70%;
  width: 80%;
  color: black;
  border: black 2px solid;
  border-radius: 2px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-image{
  height: 100px;
  width: 100px;
  box-sizing: border-box;
}
</style>
