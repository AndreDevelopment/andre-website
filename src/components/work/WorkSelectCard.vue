<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { WorkInformation } from "../../data/dataWorkExperience";

const props = defineProps({
  work: {
    type: Object as () => WorkInformation,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div :class="['select-card', { 'show-select-card': selected }]">
    <img :src="props.work.companyImgURL" alt="No comp" class="company-img" />
    <div class="select-text-box">
      <h2 class="role-title">{{ props.work.jobTitle }}</h2>
      <p class="company-s">{{ props.work.company }}</p>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
.role-title,
.company-s {
  height: fit-content;
  width: fit-content;
}
.company-s {
  color: var(--color-mg);
}
.role-title {
  color: var(--color-light);
  font-size: 1.3em;
  font-weight: 300;
}
.select-card {
  padding: 1em;
  height: 110px;
  width: 80%;
  background-color: var(--color-dark);
  display: flex;
  flex-direction: row;
  gap: 2em;
  /* border-radius: var(--radius-card); */
 
  &:hover {
    cursor: pointer;
  }
}

.show-select-card {
 
  border-bottom: 2px solid var(--color-accent);
  background: linear-gradient(to left ,var(--color-dark),var(--color-dg));
  .role-title{
    color: var(--color-accent);
  }

}
.select-text-box {
  display: flex;
  flex-direction: column;
}
.company-img {
  --company-img-sz: 80px;
  height: var(--company-img-sz);
  width: var(--company-img-sz);
  border-radius: 50%;
}
</style>
