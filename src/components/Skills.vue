<script setup lang="ts">
import { skills } from "../data/content";
</script>

<template>
  <section id="skills" class="section">
    <div class="wrap">
      <p class="eyebrow" v-reveal>01 / Capabilities</p>
      <h2 class="title" v-reveal="80">Technical stack.</h2>
      <div class="grid">
        <article v-for="(g, i) in skills" :key="g.name" class="panel card" v-reveal="i * 90">
          <h3><span>{{ String(i + 1).padStart(2, "0") }}</span>{{ g.name }}</h3>
          <ul>
            <li v-for="s in g.items" :key="s" class="chip">{{ s }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.card { padding: 2rem; }
.card:hover { transform: translateY(-6px); }
h3 { font-size: 1.05rem; font-weight: 700; letter-spacing: -.01em; margin-bottom: 1.4rem; display: flex; align-items: baseline; gap: .9rem; }
h3 span { font-size: .7rem; color: var(--cyan); letter-spacing: .2em; }
ul { display: flex; flex-wrap: wrap; gap: .55rem; }
</style>
