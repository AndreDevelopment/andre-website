<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { ProjectInformation } from "../../data/dataProjects";
import { codeIcons } from "../../data/dataProjects";

const props = defineProps({
  project: {
    type: Object as () => ProjectInformation,
    required: true,
  },
  show:{
    type: Boolean,
    required:true
  },

});
  const getCodeIcon=(icon:string)=>{

    return codeIcons[icon]?codeIcons[icon]:"pi pi-code"

  }


</script>
<!-- BODY & STRUCTURE -->
<template>

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

  <div :class="['project-card',{'show':show}]" >
    <div class="project-stats">
      <h1>{{ props.project.name }}</h1>
      <p class="description">{{ props.project.description }}</p>
      <div class="techstack-box">
      <i v-for="t in props.project.techStack" :class="getCodeIcon(t.toLocaleLowerCase())"> </i>
    </div>
      <button class="btn-try" >
        <a :href="props.project.projectURL"  target="blank">Check it out</a>
        <i class="pi pi-chevron-right try-right"></i>
      </button>
    </div>
    <div class="project-image" :style="{ backgroundImage: `url(${props.project.imageURL})` }"></div>
    <!-- <img class="project-image" :src="props.project.imageURL" /> -->
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
  color: var(--color-light);
  border: transparent 2px solid;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  opacity: 0;
  z-index: -1;
}

.project-stats {
  margin: 2.5em;
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
  width: 10em;
  gap:7px;
  display: flex;
  flex-direction: row;
  color: var(--color-accent);
  font-size: 1.5em;
}

a,.try-right{
  color:var(--color-accent);
  font-weight:400;
  text-decoration: none;
}
.btn-try {
  height: 2.5em;
  width: 8em;
  padding: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    gap:2px;
  border: solid 2px var(--color-accent);
  border-radius: 5px;
  background-color:transparent;

  &:hover {
    box-shadow: var(--card-shadow);
    transform: scale(1.1);
    cursor: pointer;
    transition: linear 4s ease-in-out;
  }

}

.project-image {
  background-position: center;
  background-size:cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  box-shadow: inset 15px 1px 40px 22px  var(--color-dark);

}




.show{
  opacity: 1;
  z-index: 1;
}


</style>
