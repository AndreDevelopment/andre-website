<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts"></script>
<!-- BODY & STRUCTURE -->
<template>

  <div class="contact-list">
    <a href="mailto:andredsouza15@gmail.com" target="_blank" class="link-contact">
      <button class="btn-contact" id="email">
        <i class="icon-contact pi pi-envelope"></i></button
    ></a>
    <a href="https://www.linkedin.com/in/andre-j-d-souza" target="_blank" class="link-contact"
      ><button class="btn-contact" id="linked-id">
        <i class="icon-contact devicon-linkedin-plain"></i></button
    ></a>
    <a href="https://github.com/AndreDevelopment" target="_blank" class="link-contact"
      ><button class="btn-contact" id="github">
        <i class="icon-contact devicon-github-original"></i></button
    ></a>
  </div>
</template>
<!-- STYLING -->
<style>

.contact-list{

  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}


.btn-contact {
  
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 1.5em;
  font-weight: 400;
  border: transparent;
  color: var(--color-accent);
  /* border: solid 2px var(--color-accent); */
  border-radius: 50%;
  background-color: transparent;

  z-index: 2;
  overflow: hidden;
  &:hover {
    color: var(--color-light);
    cursor: pointer;
  }

  &:hover:after {
    left: 0;
    width: 100%;
    border-radius: 30px;
    color: var(--color-light);
  }

  &:after {
    background-color: var(--color-accent);
    border-radius: 30px;
    overflow: hidden;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;

    transition: all 0.5s ease;
  }
}

.link-contact {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-decoration: none;
}

#email{
padding: 6px;
}
</style>
