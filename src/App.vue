<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Projects from './components/projects/Projects.vue';
import Skills from './components/skills/Skills.vue';
import WorkExp from './components/WorkExperience.vue';
import Footer from './components/Footer.vue'
import Education from './components/education/Education.vue';
import Certifications from './components/Certifications.vue';
import Contact from './components/Contact.vue';
// import anime from 'animejs'; 
// import { onMounted, onBeforeMount } from 'vue';

// const animations =  [] as anime.AnimeInstance[];


//   const  initAnimations = ()=> {
//       const sections = document.querySelectorAll("div.section");
//       sections.forEach((section) => {
//         animations.push(
//           anime({
//             targets: section.querySelector('h1')!,
//             opacity: [0, 1],
//             translateY: [50, 0],
//             duration: 800,
//             easing: 'easeInOutExpo',
//             begin: () => {},
//           })
//         );
//       });
//     };
//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const scrollY = window.scrollY;

//       animations.forEach((animation, index) => {
//         const section = document.querySelector(`#section${index + 1}`) as HTMLElement;
//         const sectionTop = section.offsetTop;
//         const sectionBottom = sectionTop + windowHeight;

//         if (scrollY-80 >= sectionTop - windowHeight / 2 && scrollY-80 <= sectionBottom) {
//           animation.play(); 
//         }
//       });
//     };
//     onBeforeMount(() => {
//       window.removeEventListener('scroll', handleScroll);
//     });

//     onMounted(() => {
//       initAnimations();
//       window.addEventListener('scroll', handleScroll);
//     });

  

</script>

<template>
  <NavBar />
  <Home/>
  <WorkExp/>
  <Education/>
  <Projects/>
  <Skills/>
  <Certifications/>
  <Contact/>
  <Footer/>
</template>

<style>
/**Zeroing default margin & padding */
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Lexend:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
:root{

  --color-light: white;
  --color-dark:black;
  --color-accent:rgb(38, 191, 36);
  --color-glass:rgba(183, 184, 183, 0.3);
  --color-lg:#e8e8e8;
  --color-dg:rgb(61, 61, 61);
  --color-mg:rgb(146, 146, 146);

  --card-shadow:rgba(0, 0, 0, 0.25) 7px 7px 19px 4px;
  /* --card-shadow:var(--color-accent) 2px 2px 19px 4px; */
  --btn-shadow:rgba(0, 0, 0, 0.25) 0 4px 8px;

  --radius-card: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lexend", serif;
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

   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
/* .section h1 {
  opacity: 0;
  transform: translateY(50px);
} */
.title {
  height: 2em;
  width: fit-content;
  color: var(--color-dg);
  font-size: 3em;
  font-family: "Lexend", serif;
  font-weight: 500;
  font-style: normal;

}

</style>
