<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { projectData } from "../../data/dataProjects";
import type { ProjectInformation } from "../../data/dataProjects";
import ProjectCard from "../projects/ProjectCard.vue";
import "primeicons/primeicons.css";
import { ref } from "vue";

const activeProject = ref(0);

const showProject = (projectIdx: number) => {
  return projectIdx === activeProject.value;
};

const handleLeftClick = () => {
  activeProject.value = (activeProject.value - 1 + projectData.length) % projectData.length;
};

const handleRightClick = () => {
  activeProject.value = (activeProject.value + 1) % projectData.length;
};

const handleSelectSlide = (projectIdx: number) => {
  activeProject.value = projectIdx;
};


</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="projects">
    <h1 class="title">Projects</h1>
    <div class="carousel">
      <div class="card-box">
        <button class="btn-caro" id="left" @click="handleLeftClick()">
          <i class="pi pi-chevron-left"></i>
        </button>

        <ProjectCard
          v-for="(p, index) in projectData"
          :project="p as unknown as ProjectInformation"
          :show="showProject(index)"
        />
        <button class="btn-caro" id="right" @click="handleRightClick()">
          <i class="pi pi-chevron-right"></i>
        </button>
        <div class="dots-box">
          <span
            :class="['dot', { 'dot-active': showProject(index) }]"
            v-for="(_, index) in projectData"
            @click="handleSelectSlide(index)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>

.carousel {
  overflow-x: hidden;
  height: inherit;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}


.btn-caro {
  position: absolute;
  color: var(--color-light);

  background-color: transparent;
  padding: 1%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: transparent;
  z-index: 10;
  &:hover {
    background-color: var(--color-glass);
    cursor: pointer;
  }
}


#left{
  top: 45%;
  left: 0;
}

#right{
  top: 45%;
  right: 0;
}
.card-box {
  position: relative;
  padding-top: 4em;
  align-self: flex-start;
  height: 80%;
  width: 90%;

}

.dots-box {
  height: 5px;
  width: 100%;

  z-index: 3;
  position: absolute;
  bottom: 4%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
}

.dot {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: rgba(189, 189, 189, 0.41);

  &:hover{
    cursor: pointer;
  }
}

.dot-active {
  background-color: var(--color-light);
}
</style>
