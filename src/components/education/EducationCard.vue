<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { EducationInformation } from "../../data/dataEducation";
import Courses from "./Courses.vue";
import { ref } from "vue";
const props = defineProps({
  instituion: {
    type: Object as () => EducationInformation,
    required: true,
  },
});

const showCourses = ref(false);

const toggleShowCourse = () => {
  showCourses.value = !showCourses.value;
};
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="education-card card-hover">
    <div class="edu-stats">
      <h2 class="degree fit-content">{{ props.instituion.degreeType }}</h2>
      <h4 class="school fit-content">{{ props.instituion.institution }}</h4>
      <h3 class="field fit-content">{{ props.instituion.fieldName }}</h3>
    </div>
    <button class="btn-courses" @click="toggleShowCourse()">
      View Relevant Courses
      <i
        :class="[
          showCourses? 'flip-up':'flip-down',
          'pi',
          'pi-angle-double-down',
          
        ]"
      ></i>
    </button>
    <Courses v-if="showCourses" :tag="props.instituion.tag" />
  </div>
</template>
<!-- STYLING -->
<style>
.education-card {
  padding: 1em;
  height: fit-content;
  max-height: 160%;
  width: 80%;
  border-radius: 10px;
  color: var(--color-light);
  background: linear-gradient(to top left, var(--color-dark), var(--color-dg));
  display: flex;
  flex-direction: column;
}
.edu-stats {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.logo {
  height: 80px;
  width: 80px;
  object-fit: contain;
}

.degree {
  font-size: 1.5em;
  font-weight: 300;
}

.field {
  font-size: 0.9em;
  font-weight: 300;
}

.school {
  font-size: 0.8em;
  color: var(--color-mg);
}
.flip-up{
  transition: transform 0.3s ease-in-out;
  transform: rotate(180deg);
}

.flip-down{
  transition: transform 0.3s ease-in-out;

}
.btn-courses {
  margin-top: 1em;
  width: fit-content;
  background-color: transparent;
  border: none;
  color: var(--color-accent);
  &:hover {
    cursor: pointer;
  }
}


</style>
