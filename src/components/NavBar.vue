<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";
import Contacts from "./Contacts.vue";

interface CustomScrollIntoViewOptions extends ScrollIntoViewOptions {
  top?: number;
}
const navItems = ["Home", "Projects", "Education", "Skills", "Work Experience"];
const activeSection = ref("home");
const scrollOffset = -80;

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const convertSectionId = (sectionId: string) => {
  return sectionId.replace(/\s+/g, "-").toLowerCase();
};
const scrollTo = (sectionId: string) => {
  sectionId = convertSectionId(sectionId);
  const element = document.getElementById(sectionId);

  if (element) {
    const y =
      element.getBoundingClientRect().top + window.scrollY + scrollOffset;
    window.scrollTo({
      behavior: "smooth",
      top: y,
    } as CustomScrollIntoViewOptions);
  }
};

const handleScroll = () => {
  const sections = document.querySelectorAll("div.section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top + scrollOffset >= 0 &&
      rect.bottom + scrollOffset <= window.innerHeight
    ) {
      activeSection.value = section.id;
    }
  });
};

const isSectionActive = (sectionId: string) => {
  sectionId = convertSectionId(sectionId);
  return activeSection.value === sectionId;
};
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div id="nav-bar-box">
    <div class="nav-zones" id="left-nav">
      <Contacts/>
    </div>
    <div class="nav-zones" id="right-nav">
      <ul id="nav-list">
        <li
          v-for="n in navItems"
          :class="['nav-item', { active: isSectionActive(n) }]"
          @click="scrollTo(n)"
        >
          {{ n }}
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
#nav-bar-box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5em;
  background-color: rgba(0, 0, 0, 0.951);
  /* background-color: rgb(34, 34, 34); */

  display: flex;
  justify-content: flex-end;
  z-index: 3;
}
#nav-list {
  color: white;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 2em;
  align-items: center;
  padding: 2em;
}
.nav-item {
  height: 2em;
  position: relative;
  display: block;
  &:hover {
    cursor: pointer;
  }
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: var(--color-accent);
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
.nav-item:hover::after,
.nav-item:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

.nav-item::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

.nav-item:hover::after,
.nav-item:focus::after {
  transform: scale(1);
}

.active::after {
  transform: scale(1);
}



#right-nav{
  width: 50%;
  justify-self: flex-start;
 
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

#left-nav{
  padding-left: 2em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
width: 50%;

}
</style>
