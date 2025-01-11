<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";
import Projects from "./components/projects/Projects.vue";
import Skills from "./components/skills/Skills.vue";
import WorkExp from "./components/work/WorkExperience.vue";
import Footer from "./components/Footer.vue";
import Education from "./components/education/Education.vue";
import Certifications from "./components/certifications/Certifications.vue";
import Contact from "./components/contact/Contact.vue";
import anime from "animejs";
import { onMounted, onBeforeMount, ref } from "vue";
import { sectionsInfo, targetElements } from "./data/dataAnimations";

const animations = [] as anime.AnimeInstance[];
const prevSectionRect = ref(new DOMRect());

const initAnimations = () => {
  const sections = document.querySelectorAll("div.section");
  sections.forEach((section) => {
    pushTitleAnimations(section);
  });

  sectionsInfo.forEach((secInfo) => {
    const section = document.querySelector(secInfo.name) as HTMLElement;
    initCardFadeIn(
      section,
      secInfo.card.name,
      secInfo.card.duration,
      secInfo.card.delay,
      secInfo.card.stagger
    );
  });

  initWorkAnimations(document.querySelector("div#work-experience")!);
  initProjectAnimation(document.querySelector("div#projects")!);
};

const pushTitleAnimations = (section: Element) => {
  const title = section.querySelector(".title") as HTMLElement;
  if (title) {
    animations.push(
      anime({
        targets: title!,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        easing: "easeInOutExpo",
        autoplay: false,
        begin: () => {},
        direction: "normal",
        complete: () => {
          title.dataset.animated = "true";
        },
      })
    );
  } //end if
}; //end of pushTitle

const initCardFadeIn = (
  section: Element,
  elementClass: string,
  duration: number,
  delay: number,
  stagger: number
) => {
  const cards = section.querySelectorAll(elementClass);

  const cardAnimations = anime({
    targets: cards!,
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: duration,
    autoplay: false,
    direction: "normal",
    delay: anime.stagger(stagger, { start: delay }),
  });

  animations.push(cardAnimations);
};

const initWorkAnimations = (section: Element) => {
  const works = [".job-info-box", ".job-select-box"];
  const direction = ref(-10);
  works.forEach((w) => {
    const job = section.querySelector(w);
    const jobAnimation = anime({
      targets: job,
      translateX: [0, direction.value],
      opacity: [0, 1],
      easing: "easeInOutExpo",
      duration: 1000,

      autoplay: false,
      direction: "normal",
    });

    animations.push(jobAnimation);
    direction.value = -direction.value;
  });
};

const initProjectAnimation = (section: Element) => {
  const projectCard = section.querySelector(".carousel");

  const projectAnimation = anime({
    targets: projectCard,
    translateX: ["-25%", "0%"],
    opacity: [0, 1],
    duration: 1500,
    autoplay:false,
    easing: "easeInOutExpo",
  });

  animations.push(projectAnimation);
};

const handleScroll = () => {
  const scrollOffset = 80;
  const sections = document.querySelectorAll("div.section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isSectionVisible =
      rect.top + scrollOffset < window.innerHeight &&
      rect.bottom + scrollOffset > 0;

    // Check if the section is entering the viewport from above OR is visible and user is scrolling down
    if (
      isSectionVisible &&
      prevSectionRect.value &&
      prevSectionRect.value.top < rect.top
    ) {
      animations.forEach((animation) => {
        const targetElement = animation.animatables[0].target;
        const targets = targetElements(section);
        if (targets.includes(targetElement)) {
          //Check to see if the animation has played already or not (Don't want to loop the animation)
          if (!animation.completed && isSectionVisible) {
            animation.play();
          }
        }
      });
    }

    prevSectionRect.value = rect;
  });
};

onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  initAnimations();
});
</script>

<template>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
  />
  <NavBar />
  <Home />
  <WorkExp />
  <Education />
  <Projects />
  <Skills />
  <Certifications />
  <Contact />
  <Footer />
</template>

<style>
/**Zeroing default margin & padding */
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Lexend:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
:root {
  --color-light: white;
  --color-dark: black;
  --color-accent: rgb(38, 191, 36);
  --color-glass: rgba(183, 184, 183, 0.3);
  --color-lg: #e8e8e8;
  --color-dg: rgb(25, 25, 25);
  --color-mg: rgb(146, 146, 146);
  --color-accent-g: rgba(34, 168, 32, 0.13);
  --color-accent-gl: rgba(34, 168, 32, 0.523);

  --card-shadow: var(--color-dg) 1px 1px 10px 1px;
  --btn-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px;

  --radius-card: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lexend", serif;
  font-weight: 300;
  height: 100%;
}
.center-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fit-content {
  height: fit-content;
  width: fit-content;
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

.card-hover {
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: var(--color-accent) 1px 1px 10px 3px;
  }
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.wrapper {
  position: relative;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section {
  min-height: 100vh;
  padding-top: 1em;
  background-color: var(--color-dark);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}

.title {
  height: fit-content;
  width: fit-content;
  color: var(--color-light);
  font-size: 3em;
  font-family: "Lexend", serif;
  font-weight: 500;
  font-style: normal;
}

.btn {
  position: relative;
  height: fit-content;
  width: fit-content;
  font-size: 0.7em;
  font-weight: 300;

  color: var(--color-accent);
  border: solid 2px var(--color-accent);
  border-radius: 30px;
  background-color: transparent;

  z-index: 2;
  overflow: hidden;
  &:hover {
    color: var(--color-light);
    cursor: pointer;
  }

  &:hover:after {
    left: 0;
    width: 100%;
    border-radius: 30px;
    color: var(--color-light);
  }

  &:after {
    background-color: var(--color-accent);
    border-radius: 30px;
    overflow: hidden;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;

    transition: all 0.4s ease;
  }
}
</style>
