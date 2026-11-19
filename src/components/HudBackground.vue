<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// Fixed full-screen canvas: faint grid + drifting data nodes that connect when near.
const canvas = ref<HTMLCanvasElement>();
let raf = 0;
let cleanup = () => {};

onMounted(() => {
  const c = canvas.value!;
  const ctx = c.getContext("2d")!;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0, h = 0, dpr = 1;
  type P = { x: number; y: number; vx: number; vy: number };
  let pts: P[] = [];
  const mouse = { x: -999, y: -999 };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(70, Math.floor((w * h) / 24000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
    }));
  };
  const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    // grid
    const g = 64;
    ctx.strokeStyle = "rgba(0,212,255,0.045)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < w; x += g) { ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, h); }
    for (let y = 0; y < h; y += g) { ctx.moveTo(0, y + .5); ctx.lineTo(w, y + .5); }
    ctx.stroke();

    for (const p of pts) {
      if (!reduce) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 150) {
          ctx.strokeStyle = `rgba(0,212,255,${(1 - d / 150) * 0.16})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const m = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (m < 190) {
        ctx.strokeStyle = `rgba(123,231,255,${(1 - m / 190) * 0.4})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = "rgba(0,212,255,0.55)";
      ctx.fillRect(a.x - 1, a.y - 1, 2, 2);
    }
    if (!reduce) raf = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onMove, { passive: true });
  cleanup = () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onMove);
  };
});

onBeforeUnmount(() => { cancelAnimationFrame(raf); cleanup(); });
</script>

<template>
  <canvas ref="canvas" class="hud-bg" aria-hidden="true"></canvas>
  <div class="vignette" aria-hidden="true"></div>
</template>

<style scoped>
.hud-bg { position: fixed; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
.vignette {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 60% at 70% 10%, rgba(0, 212, 255, .08), transparent 70%),
    radial-gradient(ellipse at center, transparent 40%, rgba(4, 8, 15, .85) 100%);
}
</style>
