<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { WorkInformation } from "../data/dataWorkExperience";

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
  font-size: 1.5em;
  font-weight: 400;
}
.select-card {
  padding: 1em;
  height: 110px;
  width: 80%;
  background-color: var(--color-dark);
  display: flex;
  flex-direction: row;
  gap: 2em;
  border-radius: var(--radius-card);
  box-shadow: var(--card-shadow);

  &:hover {
    cursor: pointer;
  }
}

.show-select-card {
  background-color: var(--color-dg);
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
