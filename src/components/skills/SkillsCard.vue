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
    <div class="skills-text">
      <h3 class="skill-title">{{ props.skill.name }}</h3>
      <div class="skills-list">
        <p class="skill-items" v-for="s in skill.skills">{{ s }}</p>
      </div>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
.skill-card {
  padding-top: 2%;
  background-color: var(--color-dark);
  border-radius: var(--radius-card);
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: var(--card-shadow);

  &:hover {
    cursor: pointer;
  transform: translateY(-5px); 
  /* box-shadow: rgba(0, 0, 0, 0.25) 7px 7px 30px 4px;  */
}
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.skills-text {

  padding-top: 2%;
  background-color: var(--color-lg);
  border-bottom-right-radius: var(--radius-card);
  border-bottom-left-radius: var(--radius-card);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.skills-list {
 
  padding: 1em;
  display: flex;
  flex-direction: column;
 
  align-items: center;
  width: 100%;
  height: 200px; 

}
.skill-title {
  height: 1.5em;
  font-weight: 400;
  font-size: 1.5em;
  color: var(--color-dark);
}
.skill-icon {
  color: var(--color-accent);
  font-size: 3.5em;
}

.skill-items {
  font-size: 14px;
  color: var(--color-dark);
}
</style>
