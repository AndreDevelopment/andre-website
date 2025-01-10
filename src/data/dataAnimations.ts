
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
    card: { name: ".education-card", duration: 1000, delay: 200, stagger: 200 },
  },
  {
    name: "div#skills",
    card: { name: ".skill-card", duration: 1000, delay:0, stagger: 200 },
  },
  {
    name: "div#certifications",
    card: { name: ".cert-card", duration: 1000, delay: 200, stagger: 200 },
  },
];

const targets = [".title",".skill-card",".education-card",".cert-card"]

export const targetElements = (section:Element)=>{

    const targetElements = [] as Element[];
    targets.forEach(t =>{
        targetElements.push(section.querySelector(t)!)
    });

    return targetElements;
};
