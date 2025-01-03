<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { educationData } from '../../data/dataEducation';
// import Courses from './Courses.vue';
import Timeline from './Timeline.vue';
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="education">
    <h1 class="title">Education</h1>    
    <div class="wrapper">
    <div class="school-box">
        <Timeline v-for="s in educationData.institutions" :instituion="s"/>
        <!-- <EducationCard v-for="i in educationData.institutions" :instituion="i" /> -->
    </div>
    <div class="courses-box">
        <!-- <Courses/> -->
    </div>
   
    </div>
</div>
</template>
<!-- STYLING -->
<style >
#education{
    color: var(--color-white);
    background-color: var(--color-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.courses-box{
   

    width: 40%;
    display: flex;
    flex-direction: column;
    
}

.school-box{
   
    height: 100%;
   
   width: 60%;
   display: flex;
   flex-direction: column;
   
}

.wrapper{
    height: 80%;
    width: 100%;
   
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
