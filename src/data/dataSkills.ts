
export interface SkillsInformation {
  name: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillsInformation[] = [
  {
    name: "Languages",
    icon: "pi pi-code",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "C#"],
  },
  {
    name: "Frameworks",
    icon: "pi pi-cog",
    skills: ['React', 'Node.js', 'Vue', 'Spring Boot','SignalR','Selenium','Laravel'],
  },
  {
    name: "Developer Tools",
    icon: "pi pi-wrench",
    skills: ['VS Code', 'Git','Github', 'Docker', 'Postman','IntelliJ'],
  },
  {
    name: "Database",
    icon: "pi pi-database",
    skills: ['MongoDB','Firebase','mySQL','Postgres'],
  },
  {
    name: "Soft Skills",
    icon: "pi pi-pencil",
    skills: ['Communication', 'Teamwork', 'Problem-solving', 'Time Management'],
  },
];
