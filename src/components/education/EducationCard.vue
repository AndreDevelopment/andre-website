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
  <div class="education-card">
    <div class="edu-stats">
      <h2 class="degree">{{ props.instituion.degreeType }}</h2>
      <h4 class="school">{{ props.instituion.institution }}</h4>
      <h3 class="field">{{ props.instituion.fieldName }}</h3>
    </div>
    <button class="btn-courses" @click="toggleShowCourse()">
      View Relevant Courses
      <i
        :class="[
          'view-chev-icon',
          'pi',
          showCourses ? 'pi-angle-double-up' : 'pi-angle-double-down',
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
  height:fit-content;
  max-height: 160%;
  width: 80%;
  border-radius: 10px;
  color: var(--color-light);
  background: linear-gradient(to top left,var(--color-dark),var(--color-dg));
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: var(--color-accent) 1px 1px 10px 3px;
  }
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
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

.degree,
.field,
.school {
  height: fit-content;
  width: fit-content;
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
