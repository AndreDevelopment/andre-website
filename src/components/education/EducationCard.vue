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
      <h2 class="degree">{{ props.instituion.degreeType }}</h2>
      <h4 class="school">{{ props.instituion.institution }}</h4>
      <h3 class="field">{{ props.instituion.fieldName }}</h3>
    
    </div>
   
  </div>
  
    </div>
</template>
<!-- STYLING -->
<style>
#education-card {
    
  padding: 1em;
  height: 80%;
  width: 325px;
  border: transparent solid 2px;
  border-radius: 10px;
  color: var(--color-light);
  background-color: var(--color-dg);
  /* box-shadow: var(--card-shadow); */
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  transform: translateY(-5px) scale(1.1); 
  
}
transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
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


.degree{
  text-wrap: wrap;
font-size: 1.5em;
font-weight: 500;

}

.field{
  font-size: 0.9em;
  font-weight: 300;
}

.school{

  font-size: 0.8em;
  color: var(--color-mg);
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
