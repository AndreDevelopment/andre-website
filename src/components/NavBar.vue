<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { sections } from "../data/content";
import { scrollToSection } from "../scrollTo";

const active = ref("home");
const progress = ref(0);
const open = ref(false);
let io: IntersectionObserver;

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = max > 0 ? window.scrollY / max : 0;
};

onMounted(() => {
  // Section whose band crosses the middle of the viewport is "active"
  io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (active.value = e.target.id)),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
onBeforeUnmount(() => { io?.disconnect(); window.removeEventListener("scroll", onScroll); });

const go = (id: string) => {
  open.value = false;
  scrollToSection(id);
};
</script>

<template>
  <header class="nav">
    <div class="bar" :style="{ transform: `scaleX(${progress})` }"></div>
    <div class="inner">
      <a href="#home" class="brand" @click.prevent="go('home')">
        <span class="reactor"></span>
        <span>A<b>.</b>DSOUZA</span>
      </a>
      <nav :class="{ open }" aria-label="Primary">
        <a
          v-for="s in sections.slice(1)"
          :key="s.id"
          :href="`#${s.id}`"
          :class="{ on: active === s.id }"
          @click.prevent="go(s.id)"
          >{{ s.label }}</a
        >
      </nav>
      <button class="burger" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
        <span></span><span></span>
      </button>
    </div>
  </header>

  <!-- side section tracker -->
  <aside class="dots" aria-hidden="true">
    <button
      v-for="s in sections"
      :key="s.id"
      :class="{ on: active === s.id }"
      :title="s.label"
      tabindex="-1"
      @click="go(s.id)"
    ></button>
  </aside>
</template>

<style scoped>
.nav {
  position: fixed; top: 0; inset-inline: 0; height: var(--nav-h); z-index: 50;
  background: linear-gradient(to bottom, rgba(4, 8, 15, .88), rgba(4, 8, 15, .55));
  backdrop-filter: blur(14px); border-bottom: 1px solid var(--line);
}
.bar {
  position: absolute; left: 0; bottom: -1px; height: 2px; width: 100%;
  background: linear-gradient(90deg, transparent, var(--cyan)); transform-origin: left;
  box-shadow: 0 0 12px var(--cyan);
}
.inner {
  height: 100%; width: min(1120px, 100% - 3rem); margin-inline: auto;
  display: flex; align-items: center; justify-content: space-between;
}
.brand { white-space: nowrap; display: flex; align-items: center; gap: .8rem; font-family: var(--heading); font-weight: 700; letter-spacing: .2em; font-size: .85rem; }
.brand b { color: var(--cyan); }
.reactor {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--cyan);
  box-shadow: 0 0 14px var(--cyan), inset 0 0 8px var(--cyan); position: relative;
  animation: pulse 3s ease-in-out infinite;
}
.reactor::after { content: ""; position: absolute; inset: 5px; border-radius: 50%; background: var(--cyan); }
@keyframes pulse { 50% { box-shadow: 0 0 22px var(--cyan), inset 0 0 12px var(--cyan); } }

nav { display: flex; gap: 2rem; }
nav a {
  font-family: var(--heading); font-size: .72rem; font-weight: 500; letter-spacing: .16em; text-transform: uppercase;
  color: var(--muted); position: relative; padding: .4rem 0; transition: color .3s;
}
nav a::after {
  content: ""; position: absolute; left: 0; bottom: 0; height: 1px; width: 100%;
  background: var(--cyan); transform: scaleX(0); transform-origin: right; transition: transform .45s var(--ease);
}
nav a:hover, nav a.on { color: var(--text); }
nav a:hover::after, nav a.on::after { transform: scaleX(1); transform-origin: left; }

.burger { display: none; background: none; border: 0; width: 40px; height: 40px; cursor: pointer; position: relative; }
.burger span { position: absolute; left: 9px; right: 9px; height: 2px; background: var(--text); transition: transform .4s var(--ease); }
.burger span:first-child { top: 15px; } .burger span:last-child { top: 23px; }
.burger[aria-expanded="true"] span:first-child { transform: translateY(4px) rotate(45deg); }
.burger[aria-expanded="true"] span:last-child { transform: translateY(-4px) rotate(-45deg); }

.dots { position: fixed; right: 1.4rem; top: 50%; transform: translateY(-50%); z-index: 40; display: flex; flex-direction: column; gap: 14px; }
.dots button {
  width: 8px; height: 8px; padding: 0; border-radius: 50%; border: 1px solid var(--line-strong);
  background: transparent; cursor: pointer; transition: all .4s var(--ease);
}
.dots button:hover { border-color: var(--cyan); }
.dots button.on { background: var(--cyan); box-shadow: 0 0 12px var(--cyan); transform: scale(1.5); }

@media (max-width: 1240px) { .dots { display: none; } }
@media (max-width: 960px) {
  .burger { display: block; }
  nav {
    position: absolute; top: var(--nav-h); inset-inline: 0; flex-direction: column; gap: 0;
    background: rgba(4, 8, 15, .97); border-bottom: 1px solid var(--line);
    max-height: 0; overflow: hidden; transition: max-height .5s var(--ease);
  }
  nav.open { max-height: calc(100svh - var(--nav-h)); overflow-y: auto; }
  nav a { padding: 1.1rem 1.5rem; }
  .dots { display: none; }
}
</style>
