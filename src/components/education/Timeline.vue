<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import type { EducationInformation } from "../../data/dataEducation";
import EducationCard from "./EducationCard.vue";

const props = defineProps({
  instituion: {
    type: Object as () => EducationInformation,
    required: true,
  },
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="timeline-box">
    <div class="edu-box">
      <EducationCard :instituion="props.instituion" />
    </div>
    <div class="line-box">
      <div class="dotted-line"></div>
      <div class="school-img center-col">
        <img
          :src="props.instituion.logoURL"
          alt="no logo"
          class="school-logo"
        />
      </div>
    </div>
    <div class="year-box">
      <h3 class="year">{{ instituion.duration }}</h3>
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
.year {
  --year-sz: 1.5em;
  height: var(--year-sz);
  font-size: var(--year-sz);
  font-weight: 300;
  color: var(--color-light);
}
.edu-box,
.year-box {
  height: 100%;
  width: 45%;
  color: var(--color-dg);
  padding: 1em;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.year-box {
  justify-content: flex-start;
}

.school-logo {
  object-fit: contain;
  border-radius: 50%;
  height: 90%;
  width: 90%;
  box-sizing: border-box;
}

.line-box {
  position: relative;
  height: 100%;
  width: 10%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &::after {
    bottom: 0;
    height: 20%;
    width: inherit;
    content: "";
    position: absolute;
    background: linear-gradient(to bottom, transparent, black);
    z-index: 1;
  }
}

.school-img {
  --school-img-sz: 70px;
  position: absolute;
  height: var(--school-img-sz);
  width: var(--school-img-sz);
  border-radius: 50%;
  background-color: var(--color-dark);
  border: 2px solid var(--color-accent);

  &:hover {
    cursor: pointer;
    transform:scale(1.3);
  }
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.timeline-box {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
}
.timeline-box:nth-child(odd) {
  flex-direction: row;
  .line-box {
    &::after {
      top: 0;
      background: linear-gradient(to top, transparent, black);
    }
  }
}
.timeline-box:nth-child(even) {
  .year-box {
    justify-content: flex-end;
  }
}

.dotted-line {
  width: 1px;
  height: 100%;
  background-color: transparent;
  border-right: 3px dotted var(--color-accent);
}
</style>
