<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { projectData } from "../data/dataProjects";
import type { ProjectInformation } from "../data/dataProjects";
import ProjectCard from "../components/ProjectCard.vue";
import 'primeicons/primeicons.css'
import { ref } from "vue";

const activeProject = ref(0);

const showProject = (projectIdx:number)=>{

    return projectIdx === activeProject.value;

}

const handleLeftClick=()=>{
  if(activeProject.value > 0){
    activeProject.value-=1;
  }else{
    activeProject.value = projectData.projects.length - 1
  }
}

const handleRightClick=()=>{
  if(activeProject.value < projectData.projects.length-1){
    activeProject.value+=1;
  }else{
    activeProject.value = 0;
  }
}



</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="projects">
    <h1 class="title">Projects</h1>
    <div class="carousel">
      <button class="btn-caro" id="left" @click="handleLeftClick()"><i class="pi pi-chevron-left"></i></button>
      <div class="card-box">
        <ProjectCard
          v-for="p,index in projectData.projects"
          :project="p as unknown as ProjectInformation"
          :show="showProject(index)"
          :zIndex="index === activeProject ? 1 : -1"
        />
      </div>
      <button class="btn-caro" id="right" @click="handleRightClick()"><i class="pi pi-chevron-right"></i></button>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
.title {
  height: 2em;
  width: 2em;
  font-weight: 300;
  font-size: 2.5em;
}

#projects {
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
}

.carousel{
  height: inherit;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.pi{
  margin-top: 35%;
  height: 80%;
  width:80%;
}
.btn-caro{

  background-color: var(--color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; 
  height: 40px; 
  border-radius: 50%;
  border:none;
  box-shadow: var(--btn-shadow);

  &:hover{
    background-color: green;
    cursor: pointer;
  }
}
.card-box{
 
  position: relative;
  padding-top:4em;
  align-self: flex-start;
  height: 70%;
  width: 80%;
}
</style>
