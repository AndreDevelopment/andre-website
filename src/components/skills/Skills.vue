<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { skillsData } from '../../data/dataSkills';
import SkillsCard from './SkillsCard.vue';
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="skills">
    <h1 class="title">Skills</h1>
    <div class="skills-box">
        <SkillsCard v-for="s in skillsData" :skill="s"/>
    </div>
</div>
</template>
<!-- STYLING -->
<style >
.skills-box{
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

}
</style>
