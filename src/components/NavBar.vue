<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts"></script>
<!-- BODY & STRUCTURE -->
<template>
  <div id="nav-bar-box">
    <ul id="nav-list">
      <li class="nav-item">Home</li>
      <li class="nav-item">Skills</li>
      <li class="nav-item">Education</li>
      <li class="nav-item">Projects</li>
      <li class="nav-item">Work Experience</li>
    </ul>
  </div>
</template>
<!-- STYLING -->
<style>
#nav-bar-box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5em;
  background-color:black;
  /* background-color: rgb(34, 34, 34); */

  display: flex;
  justify-content: flex-end;
  z-index: 3;
}
#nav-list {
    color: white;
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2em;
    align-items: center;
    padding: 2em;
}
.nav-item{

  height: 2em;
  position: relative;
  display: block;
  &:hover{
    cursor: pointer;
  }

}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: rgb(38, 191, 36);
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
.nav-item:hover::after,
.nav-item:focus::after {

  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
  
}

.nav-item::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

.nav-item:hover::after,
.nav-item:focus::after{
  transform: scale(1);
 
}
</style>
