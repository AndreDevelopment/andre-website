<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import ContactList from "./contact/ContactList.vue";
import resume from "../assets/AndreDSouzaResume_2025.pdf";
import { onMounted, ref } from "vue";

interface CustomScrollIntoViewOptions extends ScrollIntoViewOptions {
  top?: number;
}
const currentIndex = ref(0);
const roles = ["Backend Engineer", "Frontend Developer", "System Designer"];
const scrollNextSection = () => {
  const element = document.getElementById("work-experience");

  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + -80;
    window.scrollTo({
      behavior: "smooth",
      top: y,
    } as CustomScrollIntoViewOptions);
  }
};

const downloadResume = async () => {
  try {
    const response = await fetch(resume);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "AndreDSouzaResume2025.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
};
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % roles.length;
  }, 3000); 
});
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="home">
    <div class="main"></div>
    <div class="intro-box fit-content center-col">
      <p class="hello">Hello I'm</p>
      <div class="full-name">
        <h1 class="myname fit-content" id="first-name">Andre</h1>
        <h1 class="myname fit-content" id="last-name">D'Souza</h1>
      </div>
    </div>
    <div class="my-roles">
      <div class="role-box">
        <p
          :class="['role', { 'role-show': currentIndex === index }]"
          v-for="(r, index) in roles"
        >
          {{ r }}
        </p>
      </div>
    </div>
    <div class="btn-group-box">
      <div class="contact-wrap fit-content">
        <ContactList />
      </div>
      <button class="btn btn-resume" @click="downloadResume()">
        Download my Resume <i class="pi pi-download"></i>
      </button>
    </div>

    <button id="btn-next" class="fit-content" @click="scrollNextSection()">
      <i class="pi pi-angle-double-down"></i>
    </button>
  </div>
</template>
<!-- STYLING -->
<style>
#home {
  justify-content: center;
  background-color: var(--color-dark);
  text-transform: uppercase;
}
.contact-wrap {
  align-self: center;
}
.btn-group-box {
  font-size: 1.4em;
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;
}

.hello {
  height: fit-content;
  font-size: 1.5em;
  color: var(--color-mg);
}
.full-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.myname {
  position: relative;
  font-size: 7em;
  font-weight: 700;
  color: var(--color-accent);
  animation: fadeInUp 1s ease-in-out;
}

#last-name {
  color: var(--color-light);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.my-roles {
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.role-box {
  position: relative;
  height: 80%;
  width: 45%;
}

.role {

  padding:2% ;
  border-radius: 10px;
  font-size: 1.5em;
  width: fit-content;
  height: fit-content;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.role-show {
  color: var(--color-light);
  background: linear-gradient( to bottom right, var(--color-dg), var(--color-dark)); 
  transform: translateY(0);
  opacity: 1;

}

.intro-box {
  margin-top: 9%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
#btn-next {
  position: relative;

  font-size: 1.4em;
  color: var(--color-accent);

  margin-top: auto;
  background-color: transparent;
  border: none;
  animation: smoothBounce 2s infinite;
  &:hover {
    cursor: pointer;
  }
}

.btn-resume {
  padding: 1em;
  align-self: center;
}

@keyframes smoothBounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: var(--color-dark);
  border-radius: 50%;
  box-shadow: -42vw -4vh 0px 0px var(--color-accent),
    25vw -41vh 0px 0px var(--color-accent),
    -20vw 49vh 0px 1px var(--color-accent), 5vw 40vh 1px 1px var(--color-accent),
    29vw 19vh 1px 0px var(--color-accent),
    -44vw -13vh 0px 0px var(--color-accent),
    46vw 41vh 0px 1px var(--color-accent),
    -3vw -45vh 0px 1px var(--color-accent),
    47vw 35vh 1px 0px var(--color-accent), 12vw -8vh 1px 0px var(--color-accent),
    -34vw 48vh 1px 1px var(--color-accent),
    32vw 26vh 1px 1px var(--color-accent),
    32vw -41vh 1px 1px var(--color-accent), 0vw 37vh 1px 1px var(--color-accent),
    34vw -26vh 1px 0px var(--color-accent),
    -14vw -49vh 1px 0px var(--color-accent),
    -12vw 45vh 0px 1px var(--color-accent),
    -44vw -33vh 0px 1px var(--color-accent),
    -13vw 41vh 0px 0px var(--color-accent),
    -36vw -11vh 0px 1px var(--color-accent),
    -23vw -24vh 1px 0px var(--color-accent),
    -38vw -27vh 0px 1px var(--color-accent),
    16vw -19vh 0px 0px var(--color-accent),
    28vw 33vh 1px 0px var(--color-accent),
    -49vw -4vh 0px 0px var(--color-accent),
    16vw 32vh 0px 1px var(--color-accent),
    36vw -18vh 1px 0px var(--color-accent),
    -25vw -30vh 1px 0px var(--color-accent),
    -23vw 24vh 0px 1px var(--color-accent),
    -2vw -35vh 1px 1px var(--color-accent),
    -25vw 9vh 0px 0px var(--color-accent),
    -15vw -34vh 0px 0px var(--color-accent),
    -8vw -19vh 1px 0px var(--color-accent),
    -20vw -20vh 1px 1px var(--color-accent),
    42vw 50vh 0px 1px var(--color-accent),
    -32vw 10vh 1px 0px var(--color-accent),
    -23vw -17vh 0px 0px var(--color-accent),
    44vw 15vh 1px 0px var(--color-accent),
    -40vw 33vh 1px 1px var(--color-accent),
    -43vw 8vh 0px 0px var(--color-accent),
    -48vw -15vh 1px 1px var(--color-accent),
    -24vw 17vh 0px 0px var(--color-accent),
    -31vw 50vh 1px 0px var(--color-accent),
    36vw -38vh 0px 1px var(--color-accent),
    -7vw 48vh 0px 0px var(--color-accent),
    15vw -32vh 0px 0px var(--color-accent),
    29vw -41vh 0px 0px var(--color-accent), 2vw 37vh 1px 0px var(--color-accent),
    7vw -40vh 1px 1px var(--color-accent), 15vw 18vh 0px 0px var(--color-accent),
    25vw -13vh 1px 1px var(--color-accent),
    -46vw -12vh 1px 1px var(--color-accent),
    -18vw 22vh 0px 0px var(--color-accent),
    23vw -9vh 1px 0px var(--color-accent), 50vw 12vh 0px 1px var(--color-accent),
    45vw 2vh 0px 0px var(--color-accent), 14vw -48vh 1px 0px var(--color-accent),
    23vw 43vh 0px 1px var(--color-accent),
    -40vw 16vh 1px 1px var(--color-accent),
    20vw -31vh 0px 1px var(--color-accent),
    -17vw 44vh 1px 1px var(--color-accent),
    18vw -45vh 0px 0px var(--color-accent),
    33vw -6vh 0px 0px var(--color-accent), 0vw 7vh 0px 1px var(--color-accent),
    -10vw -18vh 0px 1px var(--color-accent),
    -19vw 5vh 1px 0px var(--color-accent), 1vw 42vh 0px 0px var(--color-accent),
    22vw 48vh 0px 1px var(--color-accent), 39vw -8vh 1px 1px var(--color-accent),
    -6vw -42vh 1px 0px var(--color-accent),
    -47vw 34vh 0px 0px var(--color-accent),
    -46vw 19vh 0px 1px var(--color-accent),
    -12vw -32vh 0px 0px var(--color-accent),
    -45vw -38vh 0px 1px var(--color-accent),
    -28vw 18vh 1px 0px var(--color-accent),
    -38vw -46vh 1px 1px var(--color-accent),
    49vw -6vh 1px 1px var(--color-accent),
    -28vw 18vh 1px 1px var(--color-accent),
    10vw -24vh 0px 1px var(--color-accent),
    -5vw -11vh 1px 1px var(--color-accent),
    33vw -8vh 1px 0px var(--color-accent),
    -16vw 17vh 0px 0px var(--color-accent),
    18vw 27vh 0px 1px var(--color-accent),
    -8vw -10vh 1px 1px var(--color-accent);

  /* stars were too big with the layers above but left the code in case no one cares  -- as in, if noone's just that  one other loner who actually cares    */

  box-shadow: 24vw 9vh 1px 0px var(--color-accent),
    12vw -24vh 0px 1px var(--color-accent),
    -45vw -22vh 0px 0px var(--color-accent),
    -37vw -40vh 0px 1px var(--color-accent),
    29vw 19vh 0px 1px var(--color-accent), 4vw -8vh 0px 1px var(--color-accent),
    -5vw 21vh 1px 1px var(--color-accent),
    -27vw 26vh 1px 1px var(--color-accent),
    -47vw -3vh 1px 1px var(--color-accent),
    -28vw -30vh 0px 1px var(--color-accent),
    -43vw -27vh 0px 1px var(--color-accent),
    4vw 22vh 1px 1px var(--color-accent), 36vw 23vh 0px 0px var(--color-accent),
    -21vw 24vh 1px 1px var(--color-accent),
    -16vw 2vh 1px 0px var(--color-accent),
    -16vw -6vh 0px 0px var(--color-accent), 5vw 26vh 0px 0px var(--color-accent),
    -34vw 41vh 0px 0px var(--color-accent), 1vw 42vh 1px 1px var(--color-accent),
    11vw -13vh 1px 1px var(--color-accent),
    48vw -8vh 1px 0px var(--color-accent),
    22vw -15vh 0px 0px var(--color-accent),
    45vw 49vh 0px 0px var(--color-accent),
    43vw -27vh 1px 1px var(--color-accent),
    20vw -2vh 0px 0px var(--color-accent), 8vw 22vh 0px 1px var(--color-accent),
    39vw 48vh 1px 1px var(--color-accent),
    -21vw -11vh 0px 1px var(--color-accent),
    -40vw 45vh 0px 1px var(--color-accent),
    11vw -30vh 1px 0px var(--color-accent),
    26vw 30vh 1px 0px var(--color-accent),
    45vw -29vh 0px 1px var(--color-accent),
    -2vw 18vh 0px 0px var(--color-accent),
    -29vw -45vh 1px 0px var(--color-accent),
    -7vw -27vh 1px 1px var(--color-accent),
    42vw 24vh 0px 0px var(--color-accent),
    45vw -48vh 1px 0px var(--color-accent),
    -36vw -18vh 0px 0px var(--color-accent),
    -44vw 13vh 0px 1px var(--color-accent),
    36vw 16vh 0px 1px var(--color-accent), 40vw 24vh 0px 0px var(--color-accent),
    18vw 11vh 0px 0px var(--color-accent),
    -15vw -23vh 1px 0px var(--color-accent),
    -24vw 48vh 0px 1px var(--color-accent),
    27vw -45vh 1px 0px var(--color-accent),
    -2vw -24vh 0px 1px var(--color-accent),
    -15vw -28vh 0px 0px var(--color-accent),
    -43vw 13vh 1px 0px var(--color-accent), 7vw 27vh 1px 0px var(--color-accent),
    47vw 5vh 0px 0px var(--color-accent), -45vw 15vh 1px 1px var(--color-accent),
    -5vw -28vh 0px 1px var(--color-accent),
    38vw 25vh 1px 1px var(--color-accent),
    -39vw -1vh 1px 0px var(--color-accent), 5vw 0vh 1px 0px var(--color-accent),
    49vw 13vh 0px 0px var(--color-accent), 48vw 10vh 0px 1px var(--color-accent),
    19vw -28vh 0px 0px var(--color-accent), 4vw 7vh 0px 0px var(--color-accent),
    21vw 21vh 1px 1px var(--color-accent),
    -15vw -15vh 0px 1px var(--color-accent),
    -6vw -42vh 1px 0px var(--color-accent),
    -15vw 48vh 1px 1px var(--color-accent),
    -23vw 25vh 1px 1px var(--color-accent),
    -48vw 25vh 0px 1px var(--color-accent),
    -31vw -19vh 0px 1px var(--color-accent),
    4vw 37vh 1px 1px var(--color-accent), -43vw 28vh 0px 0px var(--color-accent),
    3vw -25vh 0px 1px var(--color-accent),
    -39vw 14vh 0px 1px var(--color-accent),
    -40vw 31vh 0px 1px var(--color-accent),
    35vw -36vh 1px 1px var(--color-accent),
    16vw 49vh 0px 0px var(--color-accent), 6vw 39vh 0px 0px var(--color-accent),
    3vw -35vh 0px 1px var(--color-accent),
    -44vw -2vh 1px 0px var(--color-accent),
    -6vw 21vh 1px 0px var(--color-accent), 48vw 9vh 1px 1px var(--color-accent),
    -43vw 30vh 1px 1px var(--color-accent),
    29vw -12vh 1px 1px var(--color-accent),
    -48vw 13vh 1px 0px var(--color-accent),
    -42vw 32vh 1px 1px var(--color-accent),
    34vw 15vh 1px 1px var(--color-accent),
    29vw -37vh 1px 1px var(--color-accent), 28vw 2vh 0px 0px var(--color-accent);
  animation: zoom 12s alternate infinite;
}

@keyframes zoom {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
