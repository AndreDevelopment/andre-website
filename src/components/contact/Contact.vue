<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="contact">
    <h1 class="title">Contact Me</h1>
    <div class="wrapper" id="contact-box">
      <ContactForm />
    </div>
  </div>
</template>
<!-- STYLING -->
<style>
#contact-box {
  flex-direction: row;
  align-items: start;
}
</style>
