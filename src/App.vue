<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import WorkExp from './components/WorkExperience.vue';
import Footer from './components/Footer.vue'
import Education from './components/Education.vue';
</script>

<template>
  <NavBar />
  <Home/>
  <Projects/>
  <Education/>
  <Skills/>
  <WorkExp/>
  <Footer/>
</template>

<style>
/**Zeroing default margin & padding */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
  font-weight: 300;
  font-style: normal;
 
  height: 100%;

}

::-webkit-scrollbar {
  width: 8px; 
}

::-webkit-scrollbar-track {
  background: black; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 10px; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.section {
  min-height: 100vh;
  padding-top: 2em;
}

</style>
