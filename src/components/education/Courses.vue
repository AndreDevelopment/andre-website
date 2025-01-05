<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { courses } from "../../data/dataEducation";
</script>
<!-- BODY & STRUCTURE -->
<template>
  <h3 class="courses">Courses</h3>
  <div class="course-box">
    <div class="course-card" v-for="c in courses">
      <i :class="['course-icon',c.icon]"></i><a :href="c.courseURL" target="_blank" class="course-link">{{c.name}}</a>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>

.courses{

    height: fit-content;
    width: fit-content;
}
.course-box{
    background-color: red;
    max-height: 60%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
  
}
.course-card{
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 5px;
    
}

.course-icon,.course-link{
    text-decoration: none;
    color: var(--color-light);
    height: fit-content;
    width: fit-content;
}
</style>
