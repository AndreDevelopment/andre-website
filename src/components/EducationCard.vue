<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">

import type { EducationInformation } from '../data/dataEducation';

const props = defineProps({
  instituion: {
    type: Object as () => EducationInformation,
    required: true,
  },

});


</script>
<!-- BODY & STRUCTURE -->
<template>
<div id="education-card">
    <div class="edu-stats">
    <h2 class="degree">{{props.instituion.degreeType}}</h2>
    <h3 class="field">{{props.instituion.fieldName}}</h3>
    <h4 class="institution">{{props.instituion.institution}}</h4>
    <p class="duration">{{props.instituion.duration}}</p>
</div>
    <img :src="props.instituion.logoURL" alt="No Image" class="logo">
</div>

</template>
<!-- STYLING -->
<style >
#education-card{
    padding: 2em;
    height: 200px;
    width: 500px;
    border: transparent solid 2px;
    border-radius: 10px;
    color: var(--color-dark);
    background-color: var(--color-light);
    box-shadow: var(--card-shadow);
    display: flex;
    flex-direction: row;

}
.edu-stats{

    display: flex;
    flex-direction: column;
}

.logo{
    height: 80px;
    width: 80px;
    object-fit: contain;
}
</style>
