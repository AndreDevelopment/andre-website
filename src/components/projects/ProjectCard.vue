<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { ProjectInformation } from "../../data/dataProjects";
import { codeIcons } from "../../data/dataProjects";

const props = defineProps({
  project: {
    type: Object as () => ProjectInformation,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
});
const getCodeIcon = (icon: string) => {
  return codeIcons[icon] ? codeIcons[icon] : "pi pi-code";
};
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div :class="['project-card', { show: show }]">
    <div class="project-stats">
      <div class="title-box">
        <div class="duration-box">
          <h1>{{ props.project.name }}</h1>
          <p class="duration">{{ props.project.duration }}</p>
        </div>

        <div class="techstack-box">
          <i
            v-for="t in props.project.techStack"
            :class="[getCodeIcon(t.toLocaleLowerCase()), 'tech-icon']"
          >
          </i>
        </div>
      </div>

      <p class="description">{{ props.project.description }}</p>

      <a :href="props.project.projectURL" target="blank" class="check-link">
        <button class="btn btn-check">Check it out</button>
      </a>
    </div>
    <div
      class="project-image"
      :style="{ backgroundImage: `url(${props.project.imageURL})` }"
    ></div>
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
  background-color: var(--color-dark);

  border: transparent;
  display: flex;
  flex-direction: row;
  opacity: 0;
  z-index: -1;
  transform: translateX(5%);
  transition: all 0.7s ease-in-out;
}

.project-stats {
  margin: 2.5em;
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.tech-icon {
  height: 100%;
  font-size: 0.7em;
}

.duration-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.duration {
  margin-left: 4px;
  font-size: 0.8em;
  color: var(--color-mg);
}

.title-box {
  font-size: 1.2em;
  font-weight: 500;

  height: 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.description {
  margin-top: 2em;
  height: 5em;
}
.techstack-box {
  padding-top: 4px;

  height: 100%;
  max-width: 50%;
  gap: 7px;
  display: flex;
  flex-direction: row;

  color: var(--color-accent);
  font-size: 2em;
}

.check-link {
  height: 2.5em;
  width: 8em;
  text-decoration: none;
  .btn-check {
    padding: 2%;
    height: 100%;
    width: 100%;
    font-size: 1em;
  }
}

.project-image {
  position: relative;
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(to right, var(--color-dark), transparent);
  }
}

.show {
  opacity: 1;
  z-index: 1;
  transform: translateX(0);
}
</style>
