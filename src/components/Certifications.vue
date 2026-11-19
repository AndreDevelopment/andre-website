<script setup lang="ts">
import { certifications } from "../data/content";
</script>

<template>
  <section id="certifications" class="section">
    <div class="wrap">
      <p class="eyebrow" v-reveal>05 / Credentials</p>
      <h2 class="title" v-reveal="80">Certificates.</h2>

      <div class="grid">
        <a
          v-for="(c, i) in certifications"
          :key="c.name"
          :href="c.url"
          target="_blank"
          rel="noopener noreferrer"
          class="panel card"
          v-reveal="i * 100"
        >
          <div class="top">
            <span class="issuer">{{ c.issuer }}</span>
            <span class="date">Issued {{ c.date }}</span>
          </div>
          <h3>{{ c.name }}</h3>
          <p>{{ c.description }}</p>
          <ul>
            <li v-for="s in c.skills" :key="s" class="chip">{{ s }}</li>
          </ul>
          <span class="verify">Verify credential ↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 460px), 1fr)); gap: 2rem; }
.card { display: flex; flex-direction: column; padding: 2.2rem; }
.card:hover { transform: translateY(-6px); }
.top { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; font-family: var(--heading); font-size: .72rem; letter-spacing: .16em; text-transform: uppercase; }
.issuer { color: var(--cyan); font-weight: 600; }
.date { color: var(--muted); }
h3 { font-size: 1.4rem; font-weight: 800; letter-spacing: -.025em; line-height: 1.2; margin: 1.1rem 0 .8rem; }
p { color: var(--muted); font-size: .9rem; margin-bottom: 1.4rem; }
ul { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 1.8rem; }
.verify { margin-top: auto; font-family: var(--heading); font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; color: var(--cyan); }
</style>
