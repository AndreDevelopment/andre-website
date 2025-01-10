/**
 * TO ANIMATE:
 * 1. Push the animation to the animations array in App.vue
 * 2. Add the card or element to the targets array here (handleScroll in App.vue will be looking for this element)
 *
 *
 */

interface SectionInfo {
  name: string;
  card: CardInfo;
}

interface CardInfo {
  name: string;
  duration: number;
  delay: number;
  stagger: number;
}

export const sectionsInfo: SectionInfo[] = [
  {
    name: "div#education",
    card: { name: ".education-card", duration: 1000, delay: 100, stagger: 200 },
  },
  {
    name: "div#skills",
    card: { name: ".skill-card", duration: 1000, delay: 0, stagger: 100 },
  },
  {
    name: "div#certifications",
    card: { name: ".cert-card", duration: 1000, delay: 200, stagger: 200 },
  },
  {
    name: "div#contact",
    card: { name: "#contact-box", duration: 1000, delay: 0, stagger: 0 },
  },
];

const targets = [
  ".title",
  ".skill-card",
  ".education-card",
  ".cert-card",
  "#contact-box",
  ".job-select-box",
  ".job-info-box",
  ".carousel",
];

export const targetElements = (section: Element) => {
  const targetElements = [] as Element[];
  targets.forEach((t) => {
    targetElements.push(section.querySelector(t)!);
  });

  return targetElements;
};
