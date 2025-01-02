<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { EducationInformation } from "../../data/dataEducation";

const props = defineProps({
  instituion: {
    type: Object as () => EducationInformation,
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="institutions">
  <div id="education-card">
    <div class="edu-stats">
      <h2 class="degree"><i class="pi pi-graduation-cap"></i> &ThickSpace; {{ props.instituion.degreeType }}</h2>
      <h3 class="field">{{ props.instituion.fieldName }}</h3>
      <h4 class="institution">{{ props.instituion.institution }}</h4>
      <p class="duration">{{ props.instituion.duration }}</p>
    </div>
    <!-- <img :src="props.instituion.logoURL" alt="No Image" class="logo"> -->
  </div>
  <div class="ellipses-box">
        <span class="elli"></span><span class="elli"></span
            ><span class="elli"></span>
     </div>
    </div>
</template>
<!-- STYLING -->
<style>
#education-card {
    
  padding: 1em;
  height: 200px;
  width: 500px;
  border: transparent solid 2px;
  border-radius: 10px;
  color: var(--color-dark);
  background-color: var(--color-light);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
}
.edu-stats {

  display: flex;
  flex-direction: column;
}

.logo {
  height: 80px;
  width: 80px;
  object-fit: contain;
}

.elli{

    background-color: rgba(94, 94, 94, 0.444);
    height: 10px;
    width: 10px;
    border-radius: 50%;
}

.ellipses-box{
    
    height: 50px;
    width: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.institutions{
   
height: 100%;
width: 40%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
}
</style>
