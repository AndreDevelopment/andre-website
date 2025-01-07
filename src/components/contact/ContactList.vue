<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts"></script>
<!-- BODY & STRUCTURE -->
<template>

  <div class="contact-list">
    <a href="mailto:andredsouza15@gmail.com" target="_blank" class="link-contact">
      <i class="icon-contact pi pi-envelope"></i>
      </a>
    <a href="https://www.linkedin.com/in/andre-j-d-souza" target="_blank" class="link-contact"
      ><i class="icon-contact devicon-linkedin-plain"></i>

    </a>
    <a href="https://github.com/AndreDevelopment" target="_blank" class="link-contact"
      >
      <i class="icon-contact devicon-github-original"></i>

    </a>
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

.link-contact {
  font-size: 1.5em;
  font-weight: 400;
  /* border: transparent; */
  color: var(--color-light);
  text-decoration: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-decoration: none;
  &:hover {
    color: var(--color-accent);
    cursor: pointer;
  }
  transition: 0.2s ease-in-out;
}

#email{
padding: 6px;
}
</style>
