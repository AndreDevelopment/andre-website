<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">

import ContactForm from "./ContactForm.vue";

</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="contact">
    <h1 class="title">Contact Me</h1>
    <div class="contact-box">
            <ContactForm/>  
    </div>

</div>
</template>
<!-- STYLING -->
<style >

#contact{
   
    justify-content: flex-start;
    
}

.contact-box{
    height: 70%;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
}




</style>
