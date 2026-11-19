import type { Directive } from "vue";

// v-reveal / v-reveal="150" (delay in ms): fades + lifts element into view once.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        (e.target as HTMLElement).classList.add("in");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
);

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add("reveal");
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`;
    if (reduce) el.classList.add("in");
    else io.observe(el);
  },
  unmounted(el) {
    io.unobserve(el);
  },
};
