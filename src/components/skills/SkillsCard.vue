<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { SkillsInformation } from "../../data/dataSkills";

const props = defineProps({
  skill: {
    type: Object as () => SkillsInformation,
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="skill-card">
    <i :class="['skill-icon', props.skill.icon]"></i>
    <!-- <div class="skills-text"> -->
      <h3 class="skill-title">{{ props.skill.name }}</h3>
      <div class="skills-list">
        <p class="skill-items" v-for="s in skill.skills">{{ s }}</p>
      </div>
    <!-- </div> -->
  </div>
</template>
<!-- STYLING -->
<style>
.skill-card {
  padding-top: 2%;
  background: linear-gradient(to top, var(--color-dark), var(--color-dg));
  border-radius: var(--radius-card);
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: var(--color-accent) 1px 1px 10px 3px;
  }
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

/* .skills-text {
  padding-top: 2%;

  background-color: var(--color-dg);
  border-bottom-right-radius: var(--radius-card);
  border-bottom-left-radius: var(--radius-card);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
} */

.skills-list {
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap:5px;
  align-items: center;
  width: 100%;
  height: 200px;
}
.skill-title {
  height: 1.5em;
  width: fit-content;
  font-weight: 400;
  font-size: 1.5em;
  color: var(--color-light);
}
.skill-icon {
  height: fit-content;
  width: fit-content;
  margin-bottom: 0.7em;
  color: var(--color-accent);
  font-size: 3.5em;
}

.skill-items {
  height: fit-content;
  width: fit-content;
  font-size: 14px;
  color: var(--color-mg);
}
</style>
