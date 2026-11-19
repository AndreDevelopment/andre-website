<script setup lang="ts">
import { ref } from "vue";
import { work } from "../data/content";

const open = ref(0);
</script>

<template>
  <section id="experience" class="section">
    <div class="wrap">
      <p class="eyebrow" v-reveal>02 / Experience</p>
      <h2 class="title" v-reveal="80">Where I've worked.</h2>

      <div class="timeline">
        <article v-for="(w, i) in work" :key="w.company" class="item" v-reveal="i * 80">
          <span class="node" :class="{ on: open === i }"></span>
          <button class="head" :aria-expanded="open === i" @click="open = open === i ? -1 : i">
            <span class="when">{{ w.duration }}</span>
            <span class="role">
              <strong>{{ w.title }}</strong>
              <em>{{ w.company }}</em>
            </span>
            <span class="plus" aria-hidden="true"></span>
          </button>
          <div class="body" :class="{ open: open === i }">
            <ul>
              <li v-for="d in w.duties" :key="d">{{ d }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline { position: relative; padding-left: 2.2rem; }
.timeline::before { content: ""; position: absolute; left: 5px; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(var(--cyan), var(--line) 70%, transparent); }
.item { position: relative; border-bottom: 1px solid var(--line); }
.node { position: absolute; left: -2.2rem; top: 2.1rem; width: 11px; height: 11px; border: 1px solid var(--cyan); background: var(--bg); transform: rotate(45deg); transition: all .4s var(--ease); }
.node.on { background: var(--cyan); box-shadow: 0 0 14px var(--cyan); }
.head { width: 100%; display: grid; grid-template-columns: 200px 1fr 24px; gap: 1.5rem; align-items: center; background: none; border: 0; color: inherit; text-align: left; cursor: pointer; padding: 1.7rem 0; }
.when { font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.role strong { display: block; font-size: clamp(1.15rem, 2.4vw, 1.6rem); font-weight: 700; letter-spacing: -.02em; transition: color .3s; }
.role em { font-style: normal; color: var(--cyan); font-size: .9rem; font-family: var(--heading); }
.head:hover strong { color: var(--cyan-soft); }
.plus { position: relative; width: 16px; height: 16px; }
.plus::before, .plus::after { content: ""; position: absolute; background: var(--cyan); left: 0; right: 0; top: 7px; height: 2px; transition: transform .4s var(--ease); }
.plus::after { transform: rotate(90deg); }
.head[aria-expanded="true"] .plus::after { transform: rotate(0); }

.body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .6s var(--ease); }
.body.open { grid-template-rows: 1fr; }
.body ul { overflow: hidden; margin-left: calc(200px + 1.5rem); }
.body li { position: relative; color: var(--muted); font-size: .92rem; padding: .4rem 0 .4rem 1.4rem; max-width: 46rem; }
.body li::before { content: ""; position: absolute; left: 0; top: 1.05rem; width: 6px; height: 1px; background: var(--cyan); }
.body.open ul { padding-bottom: 1.8rem; }

@media (max-width: 760px) {
  .head { grid-template-columns: 1fr 24px; }
  .when { grid-column: 1 / -1; }
  .role { grid-row: 2; }
  .plus { grid-row: 2; grid-column: 2; }
  .body ul { margin-left: 0; }
}
</style>
