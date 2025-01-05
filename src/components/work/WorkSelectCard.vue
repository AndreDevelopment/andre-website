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
  position: relative;
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

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: var(--color-accent);
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }

  &:hover::after,
  &:focus::after {
    transform: scale(1);
  }
}

.show-select-card {
  
  background: linear-gradient(to left, var(--color-dark), var(--color-dg));
  .role-title {
    color: var(--color-accent);
  }
  &::after {
    transform: scale(1);
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
