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
    <div class="project-stats">
      <h1>{{ props.project.name }}</h1>
      <p class="description">{{ props.project.description }}</p>
      <div class="techstack-box">
      <p v-for="t in props.project.techStack">{{ t }} &ThinSpace;</p>
    </div>
      <button class="btn-try" :href="props.project.projectURL" target="blank">
        Try it out>>
      </button>
    </div>
    <img class="project-image" :src="props.project.imageURL" />
  </div>
</template>
<!-- STYLING -->
<style>
#project-card {
  height: 70%;
  width: 80%;
  padding: 2em;
  color: white;
  border: black 2px transparent;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
}

.project-stats {

  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: 1em;
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

.btn-try {
  height: 2.5em;
  width: 10em;
  border: solid 2px var(--color-dark);
  border-radius: 5px;
  background-color: var(--color-accent);
  color: var(--color-dark);
  font-weight:400;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    background-color: green;
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}

.project-image {
  border-radius: 10px;
  object-fit: contain;
  height: 100%;
  width: 50%;
  box-sizing: border-box;

}

</style>
