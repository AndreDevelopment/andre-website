<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { courses } from "../../data/dataEducation";

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});

const filteredCourses = courses.filter((course) => course.tag === props.tag);
</script>
<!-- BODY & STRUCTURE -->
<template>
  <h3 class="courses fit-content">Courses</h3>
  <div class="course-box">
    <div class="course-card fit-content" v-for="c in filteredCourses">
      <a :href="c.courseURL" target="_blank" class="course-link fit-content">
        <i :class="['course-icon', c.icon]"></i> &ThickSpace;{{ c.name }}</a
      >
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
.courses {
  align-self: center;
  margin: 5px 0 7px 0;

}
.course-box {
  max-height: 100%;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  animation: slideDown 0.4s ease-in-out;
}

.course-card {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 7px;
}


.course-link {
  color: var(--color-light);
  text-decoration: none;
  &:hover {
    color: var(--color-accent);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
