<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { educationData } from '../../data/dataEducation';
import EducationCard from '../education/EducationCard.vue';
import Courses from './Courses.vue';
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="education">
    <h1 class="title">Education</h1>
    <div class="wrapper">
    <div class="education-box">
        <EducationCard v-for="i in educationData.institutions" :instituion="i" />
    </div>
    <Courses/>
</div>
</div>
</template>
<!-- STYLING -->
<style >
#education{
    color: var(--color-light);
    background-color: var(--color-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.education-box{
   
 
    width: 50%;
    display: flex;
    flex-direction: column;
    
}

.wrapper{

    width: 100%;
   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
