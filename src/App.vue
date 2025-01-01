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

:root{

  --color-light: white;
  --color-dark:black;
  --color-accent:rgb(38, 191, 36);
  --color-glass:rgba(183, 184, 183, 0.3);

  --card-shadow:rgba(0, 0, 0, 0.25) 0 8px 15px;
  --btn-shadow:rgba(0, 0, 0, 0.25) 0 4px 8px;
}

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

.title {
  height: 2em;
  width: 3.5em;
  font-weight: 600;
  font-size: 2.5em;
}

</style>
