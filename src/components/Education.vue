<script setup lang="ts">
import { education } from "../data/content";
</script>

<template>
  <section id="education" class="section">
    <div class="wrap">
      <p class="eyebrow" v-reveal>04 / Education</p>
      <h2 class="title" v-reveal="80">Foundations.</h2>

      <div class="list">
        <article v-for="(e, i) in education" :key="e.school" class="panel card" v-reveal="i * 100">
          <div class="logo"><img :src="e.logo" :alt="`${e.school} logo`" loading="lazy" /></div>
          <div class="main">
            <span class="dur">{{ e.duration }}</span>
            <h3>{{ e.degree }}</h3>
            <p class="field">{{ e.field }}</p>
            <p class="school">{{ e.school }}</p>
            <p class="label">Relevant coursework</p>
            <ul>
              <li v-for="c in e.courses" :key="c" class="chip">{{ c }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list { display: grid; gap: 2rem; }
.card { display: grid; grid-template-columns: 150px 1fr; gap: 2.5rem; padding: 2.4rem; }
.logo { display: flex; align-items: flex-start; justify-content: center; }
.logo img { width: 110px; height: 110px; object-fit: contain; background: #fff; padding: 12px; border-radius: 4px; }
.dur { font-family: var(--heading); font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; color: var(--cyan); }
h3 { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; letter-spacing: -.03em; margin: .5rem 0 .2rem; }
.field { color: var(--text); }
.school { color: var(--muted); font-size: .9rem; }
.label { font-family: var(--heading); font-size: .7rem; letter-spacing: .22em; text-transform: uppercase; color: var(--muted); margin: 1.8rem 0 .8rem; }
ul { display: flex; flex-wrap: wrap; gap: .5rem; }
@media (max-width: 480px) { .card { padding: 1.3rem; } .logo img { width: 90px; height: 90px; } }
@media (max-width: 680px) { .card { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.6rem; } .logo { justify-content: flex-start; } }
</style>
