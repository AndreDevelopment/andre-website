// Scroll so a section's content (not its empty top padding) sits just under the nav.
export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const target = id === "home" ? section : section.querySelector<HTMLElement>(".wrap") ?? section;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
