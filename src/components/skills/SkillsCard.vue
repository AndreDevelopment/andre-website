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
  <div class="skill-card card-hover">
    <i :class="['skill-icon','fit-content', props.skill.icon]"></i>
    <!-- <div class="skills-text"> -->
      <h3 class="skill-title">{{ props.skill.name }}</h3>
      <div class="skills-list">
        <p class="skill-items fit-content" v-for="s in skill.skills">{{ s }}</p>
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
}

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
  margin-bottom: 0.7em;
  color: var(--color-accent);
  font-size: 3.5em;
}

.skill-items {
  font-size: 14px;
  color: var(--color-mg);
}
</style>
