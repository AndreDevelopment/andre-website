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
  <div id="education-card">
    <div class="edu-stats">
      <h2 class="degree">{{ props.instituion.degreeType }}</h2>
      <h4 class="school">{{ props.instituion.institution }}</h4>
      <h3 class="field">{{ props.instituion.fieldName }}</h3>
    
    </div>
   
  </div>
  
</template>
<!-- STYLING -->
<style>
#education-card {
    
  padding: 1em;
  height: fit-content;
  width: 100%;
  border: transparent solid 2px;
  border-radius: 10px;
  color: var(--color-light);
  background-color: var(--color-dg);
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
  gap: 5px;
}

.logo {
  height: 80px;
  width: 80px;
  object-fit: contain;
}

.degree,.field,.school{
  height: fit-content;
  width: fit-content;
}

.degree{
font-size: 1.5em;
font-weight: 300;

}

.field{
  font-size: 0.9em;
  font-weight: 300;
}

.school{

  font-size: 0.8em;
  color: var(--color-mg);
}

</style>
