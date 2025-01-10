<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import {certificationsData} from '../../data/dataCertification'
import CertificationCard from './CertificationCard.vue'
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="certifications">
    <h1 class="title">Certifications</h1>
    <div class="wrapper" id="cert-wrapper">
        <CertificationCard v-for="c in certificationsData" :cert="c"/>

    </div>
</div>
</template>
<!-- STYLING -->
<style >

#cert-wrapper{
    
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
}
</style>
