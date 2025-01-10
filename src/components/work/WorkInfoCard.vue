<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { WorkInformation } from "../../data/dataWorkExperience";

const props = defineProps({
  work: {
    type: Object as () => WorkInformation,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div :class="['work-info-box', { 'show-job': selected }]">
    <h2 class="job-title fit-content">{{ props.work.jobTitle }}</h2>
    <p class="company-year fit-content">
      {{ props.work.company }} | {{ props.work.duration }}
    </p>
    <ul class="duties-list">
      <li class="duty fit-content" v-for="d in props.work.duties">{{ d }}</li>
    </ul>
  </div>
</template>
<!-- STYLING -->
<style>
.company-year,
.job-title,
.duty {
  color: var(--color-light);
}

.company-year {
  margin-left: 2px;
  color: var(--color-mg);
  font-size: 0.9em;
  font-weight: 300;
}
.job-title {
  font-size: 2em;
  font-weight: 350;
}
.work-info-box {
  padding: 1em 0 2em 2em;
  width: 90%;
  height: 80%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: var(--radius-card);
  gap: 5px;
  background: linear-gradient(to top right, var(--color-dark), var(--color-dg));
  opacity: 0;
  z-index: -1;
  transform: translateX(5%);

  transition: all 0.5s ease-in-out;
}

.show-job {
  opacity: 1;
  z-index: 1;
  transform: translateX(0);
}

.duties-list {
  font-size: 0.9em;
  list-style: square;
  padding-left: 1.5em;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
