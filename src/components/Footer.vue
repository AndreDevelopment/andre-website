<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import { codeIcons } from "../data/dataProjects";
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div id="footer-box">
    <p class="dev-text">Andre D'Souza 2025 &copy • Developed with</p>
    <i :class="codeIcons['vue']" id="dev-tool"></i>
    <i :class="codeIcons['typescript']" id="dev-tool"></i>
  </div>
</template>
<!-- STYLING -->
<style>
#footer-box {
  color: white;
  width: 100%;
  height: 5%;
  background-color: var(--color-dark);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 1em;
  gap: 5px;
  color: var(--color-mg);
}
.dev-text,
#dev-tool {
  height: fit-content;
  width: fit-content;
}
</style>
