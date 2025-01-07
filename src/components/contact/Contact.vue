<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">

import ContactForm from "./ContactForm.vue";

</script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="contact">
    <h1 class="title">Contact Me</h1>
    <!-- <h3 class="greet">I'd love to hear from you! Let's connect.</h3> -->
    <div class="contact-box">
        <!-- <div class="contact-form-box"> -->
            <ContactForm/>
        <!-- </div> -->
        <!-- <div class="contact-form-box">
            <h2 class="media">Media Links</h2>
            <button class="btn-resume btn-submit">Download my Resume <i class="pi pi-download"></i></button>
            <ContactList/>
        </div> -->
       
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

.contact-form-box{
   
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
}

.greet{
    height: fit-content;
    width: fit-content;
    color: var(--color-mg);
}
.media{
    height: fit-content;
    width: fit-content;
    color: var(--color-light);
}
</style>
