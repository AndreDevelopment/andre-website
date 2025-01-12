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
    <div class="wrapper" id="work-wrapper">
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

#work-experience{
  overflow-x: hidden;
}

#work-wrapper {
  flex-direction: row;
}

.job-select-box, .job-info-box{
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
}
.job-select-box {
  width: 40%;
  gap: 10px;

}
.job-info-box {

  width: 60%;
}
</style>
