<script setup lang="ts">
import { projects } from "../data/content";

// Subtle 3D tilt that follows the pointer.
const tilt = (e: PointerEvent) => {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
};
const untilt = (e: PointerEvent) => ((e.currentTarget as HTMLElement).style.transform = "");
</script>

<template>
  <section id="projects" class="section">
    <div class="wrap">
      <p class="eyebrow" v-reveal>03 / Projects</p>
      <h2 class="title" v-reveal="80">Selected work.</h2>

      <div class="grid">
        <div v-for="(p, i) in projects" :key="p.name" v-reveal="(i % 2) * 120">
          <component
            :is="p.url ? 'a' : 'div'"
            :href="p.url || undefined"
            :target="p.url ? '_blank' : undefined"
            rel="noopener noreferrer"
            class="panel card"
            @pointermove="tilt"
            @pointerleave="untilt"
          >
            <div class="shot">
              <img :src="p.image" :alt="`${p.name} screenshot`" loading="lazy" />
              <span class="scan"></span>
            </div>
            <div class="info">
              <div class="meta">
                <span>{{ p.duration }}</span>
                <span v-if="p.url" class="go">View ↗</span>
              </div>
              <h3>{{ p.name }}</h3>
              <p>{{ p.description }}</p>
              <ul>
                <li v-for="t in p.stack" :key="t" class="chip">{{ t }}</li>
              </ul>
            </div>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr)); gap: 2rem; }
.card { display: block; height: 100%; overflow: hidden; transition: transform .25s ease-out, border-color .4s, box-shadow .5s; }
.shot { position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: var(--bg-2); border-bottom: 1px solid var(--line); }
.shot img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform 1.2s var(--ease), filter .6s; filter: saturate(.85) brightness(.85); }
.card:hover img { transform: scale(1.06); filter: none; }
.scan { position: absolute; left: 0; right: 0; height: 40%; top: -40%; background: linear-gradient(to bottom, transparent, rgba(0, 212, 255, .18), transparent); pointer-events: none; }
.card:hover .scan { animation: sweep 1.4s var(--ease); }
@keyframes sweep { to { top: 100%; } }
.info { padding: 1.8rem 2rem 2rem; }
.meta { display: flex; justify-content: space-between; font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); font-family: var(--heading); }
.go { color: var(--cyan); }
h3 { font-size: 1.6rem; font-weight: 800; letter-spacing: -.03em; margin: .6rem 0 .7rem; }
p { color: var(--muted); font-size: .9rem; margin-bottom: 1.3rem; }
ul { display: flex; flex-wrap: wrap; gap: .5rem; }
</style>
