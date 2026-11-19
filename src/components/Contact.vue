<script setup lang="ts">
import { profile } from "../data/content";
</script>

<template>
  <section id="contact" class="section">
    <div class="wrap">
      <p class="eyebrow" v-reveal>06 / Contact</p>
      <h2 class="big" v-reveal="80">Let's build<br />something <span>reliable.</span></h2>
      <a class="mail" :href="`mailto:${profile.email}`" v-reveal="160">{{ profile.email }}</a>
      <div class="links" v-reveal="240">
        <a class="btn" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a class="btn" :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a class="btn ghost" :href="profile.resume" download>Resume ↓</a>
      </div>
    </div>
  </section>
  <footer>
    <p>© {{ new Date().getFullYear() }} {{ profile.name }} · Built with Vue</p>
  </footer>
</template>

<style scoped>
#contact { padding-bottom: 7rem; }
.big { font-size: clamp(2.8rem, 8vw, 6.5rem); font-weight: 800; letter-spacing: -.05em; line-height: 1; margin: 1.2rem 0 2.5rem; }
.big span { color: var(--cyan); text-shadow: 0 0 40px rgba(0, 212, 255, .5); }
.mail { display: inline-block; font-family: var(--heading); font-size: clamp(1.1rem, 3vw, 1.8rem); font-weight: 500; border-bottom: 1px solid var(--line-strong); padding-bottom: .3rem; transition: color .3s, border-color .3s; word-break: break-all; }
.mail:hover { color: var(--cyan); border-color: var(--cyan); }
.links { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 3rem; }
footer { position: relative; z-index: 1; text-align: center; padding: 2rem 1rem; border-top: 1px solid var(--line); color: var(--muted); font-size: .8rem; }
</style>
