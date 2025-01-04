<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import WorkSelectCard from "../work/WorkSelectCard.vue";
import WorkInfoCard from "../work/WorkInfoCard.vue";
import { workData } from "../../data/dataWorkExperience";
import { ref } from "vue";
const activeWorkExp = ref(0);

const showWork = (workIdx: number) => {
  return workIdx === activeWorkExp.value;
};

const handleWorkClick=(workIdx: number)=>{
  activeWorkExp.value = workIdx;
}

</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="work-experience">
    <h1 class="title">Work Experience</h1>
    <div class="work-wrapper">
      <div class="job-select-box">
        <WorkSelectCard v-for="w,index in workData" :work="w" @click="handleWorkClick(index)" :selected="showWork(index)" />
      </div>
      <div class="job-info-box">
        <WorkInfoCard v-for="w,index in workData" :work="w"  :selected="showWork(index)"/>
      </div>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
#work-experience {

  justify-content: start;
  gap: 10px;
}

.work-wrapper {
  height: 80%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
}
.job-select-box {
  height: 100%;
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.job-info-box {
  height: 100%;
  width: 60%;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
