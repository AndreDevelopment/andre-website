<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts"></script>
<!-- BODY & STRUCTURE -->
<template>
<div class="section" id="home">
    <p>Hello I'm</p>
    <section class="animation">
        <div class="first"><div>Andre D'Souza</div></div>
        <div class="second"><div>A Web Developer</div></div>
        <div class="third"><div>A Software Engineer</div></div>
    </section>
</div>
</template>
<!-- STYLING -->
<style  >

p {

    height: 2.26rem;;
}
#home{
    color: #e5e5e5;
    background-color: black;
    font-size: 2.26rem;
    text-transform: uppercase;
    /* margin-top: 5em; */

    display: flex;
    justify-content: center;
    align-items: center;
}

.animation {
   
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 6s infinite ease-in-out;
}

.first div {
    background-color:white;
  color: black;
}
.second div {
  background-color:white;
  color: black;
}
.third div {
    background-color:white;
    color: black;
}

@keyframes text-animation {
   0% {margin-top: 0rem; }
  14.3% {margin-top: 0rem; }
  28.6% {margin-top: -2.84rem; }
  42.9% {margin-top: -2.84rem;}
  57.2% {margin-top: -5.70rem}
  71.5% {margin-top: -5.70rem;}
  86% {margin-top: 0rem; }
  100% {margin-top: 0rem; }

}
</style>
