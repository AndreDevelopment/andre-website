<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { ProjectInformation } from "../data/dataProjects";

const props = defineProps({
  project: {
    type: Object as () => ProjectInformation,
    required: true,
  },
  show:{
    type: Boolean,
    required:true
  },
  zIndex:{
    type: Number,
    required:true
  }
});




</script>
<!-- BODY & STRUCTURE -->
<template>
  <div :class="['project-card',{'show':show}]" >
    <div class="project-stats">
      <h1>{{ props.project.name }}</h1>
      <p class="description">{{ props.project.description }}</p>
      <div class="techstack-box">
      <p v-for="t in props.project.techStack">{{ t }} &ThinSpace;</p>
    </div>
      <button class="btn-try" :style="{ zIndex: zIndex}">
        <a :href="props.project.projectURL"  target="blank">Try it out>></a> 
      </button>
    </div>
    <img class="project-image" :src="props.project.imageURL" />
  </div>
</template>
<!-- STYLING -->
<style>
.project-card {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2em;
  color: white;
  border: transparent 2px solid;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  opacity: 0;
}

.project-stats {

  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: 1em;

}

h1{

  height: 2em;
  width: 100%;
}

.description{

  height: 5em;
}
.techstack-box{
  height: 2em;
  display: flex;
  flex-direction: row;
  color: var(--color-accent);
}

a{
  color: var(--color-dark);
  font-weight:400;
  text-decoration: none;
}
.btn-try {
  height: 2.5em;
  width: 8em;
  border: solid 2px var(--color-dark);
  border-radius: 5px;
  background-color: var(--color-accent);

  &:hover {
    box-shadow: var(--card-shadow);
    background-color: green;
    cursor: pointer;
  }


}

.project-image {
  border-radius: 10px;
  object-fit: contain;
  height: 100%;
  width: 50%;
  box-sizing: border-box;

}

.show{
  opacity: 1;
}

</style>
