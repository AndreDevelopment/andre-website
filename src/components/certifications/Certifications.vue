<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import {certificationsData} from '../../data/dataCertification'
import CertificationCard from './CertificationCard.vue'
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="certifications">
    <h1 class="title">Certifications</h1>
    <div class="cert-box">
        <CertificationCard v-for="c in certificationsData" :cert="c"/>

    </div>
</div>
</template>
<!-- STYLING -->
<style >
#certifications{
    /* background-color: var(--color-lg); */
    justify-content: start;
}

.cert-box{
    
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
}
</style>
