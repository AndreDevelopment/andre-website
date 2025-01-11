<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { educationData } from '../../data/dataEducation';

import Timeline from './Timeline.vue';
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="education">
    <h1 class="title">Education</h1>    
    <div class="wrapper" id="education-wrapper">
        <Timeline v-for="s in educationData" :instituion="s"/>
    </div>
</div>
</template>
<!-- STYLING -->
<style >

#education-wrapper{
    gap: 2px;
}
</style>
