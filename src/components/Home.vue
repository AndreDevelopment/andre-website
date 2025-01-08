<!-- SCRIPTING & FUNCTIONS -->
<script setup lang="ts">
import ContactList from "./contact/ContactList.vue";
import resume from "../assets/AndreDSouzaResume_2025.pdf";

interface CustomScrollIntoViewOptions extends ScrollIntoViewOptions {
  top?: number;
}
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
</script>
<!-- BODY & STRUCTURE -->
<template>
  <div class="section" id="home">
    <div class="main"></div>
    <div class="intro-box">
      <p class="hello">Hello I'm</p>
      <section class="animation">
        <div class="me-item" id="andre"><div>Andre D'Souza</div></div>
        <div class="me-item"><div>A Software Dev</div></div>
        <div class="me-item"><div>A Web Developer</div></div>
      </section>
    </div>
    <div class="btn-group-box">
      <div class="contact-wrap">
      <ContactList />
    </div>
      <button class="btn btn-resume" @click="downloadResume()">
        Download my Resume <i class="pi pi-download"></i>
      </button>
    </div>

    <button id="btn-next" @click="scrollNextSection()">
      <i class="pi pi-angle-double-down"></i>
    </button>
  </div>
</template>
<!-- STYLING -->
<style>
#home {

  background-color: var(--color-dark);
  font-size: 2.26rem;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-wrap{
  margin: auto;
  height: fit-content;
  width: fit-content;
}
.btn-group-box {
  height: 30%;
  width: 40%;
  scale: 0.7;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;
}
#andre > div {
  background-color: var(--color-accent);
}
.hello {
  height: 2.26rem;
  color: var(--color-light);
}

.me-item {
  width: fit-content;

}
.animation {
  height: 50px;
  overflow: hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height: 2.81rem;
  display: inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite ease-in-out;
}

.me-item div {
  background-color: var(--color-light);
  color: var(--color-dark);
  text-align: center;
}
.intro-box {
  transform: scale(1.3);
  margin-top: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  width: fit-content;
}
#btn-next {
  position: relative;
  --btn-next-sz: 40px;
  font-size: 0.7em;
  color: var(--color-accent);
  height: var(--btn-next-sz);
  width: var(--btn-next-sz);
  margin-top: auto;
  background-color: transparent;
  border: none;
  animation: smoothBounce 2s infinite;
  &:hover {
    cursor: pointer;
  }
}

.btn-resume {
  margin: auto;
  padding: 3%;

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

@keyframes text-animation {
  0% {
    margin-top: 0rem;
  }
  14.3% {
    margin-top: 0rem;
  }
  28.6% {
    margin-top: -2.84rem;
  }
  42.9% {
    margin-top: -2.84rem;
  }
  57.2% {
    margin-top: -5.7rem;
  }
  71.5% {
    margin-top: -5.7rem;
  }
  86% {
    margin-top: 0rem;
  }
  100% {
    margin-top: 0rem;
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
