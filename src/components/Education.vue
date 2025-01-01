<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { educationData } from '../data/dataEducation';
import EducationCard from '../components/EducationCard.vue';
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="education">
    <h1 class="title">Education</h1>
    <div class="education-box">
        <EducationCard v-for="i in educationData.institutions" :instituion="i" />
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
    padding-left:4em ;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
}
</style>
