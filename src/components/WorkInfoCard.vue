<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { WorkInformation } from '../data/dataWorkExperience';

const props = defineProps({
  work: {
    type: Object as () => WorkInformation,
    required: true,
  },
  selected:{
    type:Boolean,
    required:true
  }

});
</script>
<!-- BODY & STRUCTURE -->
<template>
<div :class="['work-info-box',{'show-job': selected}]">
    <h2 class="job-title">{{props.work.jobTitle}}</h2>
    <p class="company">{{props.work.company}}</p>
    <p class="job-year">{{props.work.duration}}</p>
    <ul class="duties-list">
        <li class="duty" v-for="d in props.work.duties">{{d}}</li>
    </ul>
</div>
</template>
<!-- STYLING -->
<style >

.job-title{
    color: var(--color-light);
    font-size: 2em;
    font-weight: 500;
}

.company{
    color: var(--color-light);
    font-size: 1em;
    font-weight: 300;
}

.job-year{
    color: var(--color-mg);
    font-size: 0.8em;
    font-weight: 300;
}

.duty{
    color: var(--color-light);
}

.job-year,.company,.job-title,.duty{
    width: fit-content;
    height: fit-content;
}
.work-info-box{
    padding: 1em 0 2em 2em;
    width: 90%;
    height: 80%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-radius:var(--radius-card) ;
    box-shadow: var(--card-shadow);
    background-color: var(--color-dark);
    opacity: 0;
    z-index: -1;

}

.show-job {
  opacity: 1;
  z-index: 1;
}

.duties-list{

    font-size: 0.9em;

    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
}

   

</style>
