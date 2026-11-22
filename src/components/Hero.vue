<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { profile } from "../data/content";
import { scrollToSection } from "../scrollTo";

// Typewriter that cycles through roles.
const text = ref("");
let timer = 0;
onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    text.value = profile.roles.join(" · ");
    return;
  }
  let r = 0, i = 0, del = false;
  const tick = () => {
    const word = profile.roles[r];
    text.value = word.slice(0, i);
    let wait = del ? 35 : 70;
    if (!del && i === word.length) { del = true; wait = 1600; }
    else if (del && i === 0) { del = false; r = (r + 1) % profile.roles.length; wait = 350; }
    else i += del ? -1 : 1;
    timer = window.setTimeout(tick, wait);
  };
  tick();
});
onBeforeUnmount(() => clearTimeout(timer));

const next = () => scrollToSection("skills");
</script>

<template>
  <section id="home" class="hero">
    <div class="rings" aria-hidden="true">
      <svg viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="290" class="r1" />
        <circle cx="300" cy="300" r="230" class="r2" />
        <circle cx="300" cy="300" r="170" class="r3" />
        <circle cx="300" cy="300" r="6" class="core" />
        <g class="ticks">
          <line v-for="n in 60" :key="n" x1="300" y1="6" x2="300" :y2="n % 5 === 0 ? 24 : 15"
            :transform="`rotate(${n * 6} 300 300)`" />
        </g>
      </svg>
    </div>

    <div class="wrap">
      <p class="status"><span class="blip"></span> System online</p>
      <h1>
        <span class="line"><span>Andre</span></span>
        <span class="line"><span>D'Souza<i>.</i></span></span>
      </h1>
      <p class="role"><span>{{ text }}</span><em class="caret"></em></p>
      <p class="lede">
        I design and build dependable software, from manufacturing systems used across
        three countries to real-time web applications.
      </p>
      <div class="cta">
        <a class="btn" href="#projects">View projects</a>
        <a class="btn ghost" :href="profile.resume" download>Resume ↓</a>
      </div>
    </div>

    <button class="scroll" aria-label="Scroll to next section" @click="next">
      <span>Scroll</span><i></i>
    </button>
  </section>
</template>

<style scoped>
.hero { min-height: 100svh; display: flex; align-items: center; position: relative; padding: calc(var(--nav-h) + 2rem) 0 6rem; overflow: hidden; }
.status { font-family: var(--heading); font-size: .72rem; letter-spacing: .28em; text-transform: uppercase; color: var(--cyan); display: flex; align-items: center; gap: .8rem; animation: in 1s .1s both var(--ease); }
.blip { width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: blink 2s infinite; }
@keyframes blink { 50% { opacity: .25; } }
h1 { font-size: clamp(2.6rem, 12vw, 9.5rem); font-weight: 800; letter-spacing: -.05em; line-height: .92; margin: 1.6rem 0 1.4rem; }
.line { display: block; overflow: hidden; padding-bottom: .08em; }
.line > span { display: inline-block; transform: translateY(110%); animation: rise 1.2s var(--ease) forwards; }
.line:nth-child(2) > span { animation-delay: .15s; }
h1 i { color: var(--cyan); font-style: normal; text-shadow: 0 0 30px var(--cyan); }
@keyframes rise { to { transform: none; } }
.role { font-family: var(--heading); font-size: clamp(1.1rem, 2.4vw, 1.6rem); font-weight: 500; min-height: 2.2rem; color: var(--cyan-soft); animation: in 1s .6s both var(--ease); }
.caret { display: inline-block; width: 2px; height: 1.1em; background: var(--cyan); margin-left: 4px; vertical-align: -.15em; animation: blink 1s steps(1) infinite; }
.lede { max-width: 34rem; margin-top: 1.4rem; color: var(--muted); animation: in 1s .8s both var(--ease); }
.cta { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.6rem; animation: in 1s 1s both var(--ease); }
@keyframes in { from { opacity: 0; transform: translateY(20px); } }

.rings { position: absolute; right: -8vw; top: 50%; width: min(78vh, 62vw); aspect-ratio: 1; transform: translateY(-50%); opacity: .9; pointer-events: none; }
.rings svg { width: 100%; height: 100%; overflow: visible; }
.rings circle { fill: none; stroke: var(--cyan); transform-origin: 300px 300px; }
.r1 { stroke-opacity: .25; stroke-width: 1; stroke-dasharray: 4 14; animation: spin 90s linear infinite; }
.r2 { stroke-opacity: .4; stroke-width: 1.5; stroke-dasharray: 120 40 10 40; animation: spin 60s linear infinite reverse; }
.r3 { stroke-opacity: .55; stroke-width: 2; stroke-dasharray: 260 80; animation: spin 40s linear infinite; filter: drop-shadow(0 0 8px var(--cyan)); }
.core { fill: var(--cyan) !important; filter: drop-shadow(0 0 18px var(--cyan)); animation: blink 3s infinite; }
.ticks { transform-origin: 300px 300px; animation: spin 120s linear infinite; }
.ticks line { stroke: var(--cyan); stroke-opacity: .35; }
@keyframes spin { to { transform: rotate(360deg); } }

.scroll { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); background: none; border: 0; color: var(--muted); cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: .6rem; font-size: .65rem; letter-spacing: .3em; text-transform: uppercase; }
.scroll i { width: 1px; height: 46px; background: linear-gradient(var(--cyan), transparent); animation: drop 2s var(--ease) infinite; transform-origin: top; }
@keyframes drop { 0% { transform: scaleY(0); } 50% { transform: scaleY(1); } 100% { transform: scaleY(1); opacity: 0; } }
.scroll:hover { color: var(--cyan); }
@media (max-width: 760px) { .rings { opacity: .35; right: -30vw; } .hero { padding-bottom: 5rem; } }
@media (max-width: 420px) { .cta .btn { flex: 1 1 100%; justify-content: center; } .status { letter-spacing: .2em; } }
@media (max-height: 640px) { .scroll { display: none; } .hero { padding-bottom: 3rem; } }
</style>
