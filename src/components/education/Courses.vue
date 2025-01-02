<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { courses } from '../../data/dataEducation';
</script>
<!-- BODY & STRUCTURE -->
<template>
<table>
  <thead>
    <tr>
      <th>Course Name</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="course in courses" :key="course.name">
      <td><a :href="course.courseURL" target="_blank"><i :class="course.icon"></i> {{ course.name }}</a> </td>
  
    </tr>
  </tbody>
</table>
</template>
<!-- STYLING -->
<style >
 table {
    border-collapse: collapse; 
  }

  th, td {
    border-bottom: 1px solid #ddd; 
   
  }
</style>
