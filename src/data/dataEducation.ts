import TMU from "../assets/TMU.png";
import OCS from "../assets/senator.png";

export interface EducationInformation {
  degreeType: string;
  fieldName: string;
  institution: string;
  duration: string;
  logoURL: string;
}

interface Course {
  name: string;
  icon: string;
  courseURL: string;
}

export const courses: Course[] = [
  {
    name: "Intelligent Systems",
    icon: "pi pi-cog",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/ELE888_course_outline.html",
  },
  {
    name: "Distributed and Cloud Computing",
    icon: "pi pi-cloud",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE892_course_outline.html",
  },
  {
    name: "Software Testing",
    icon: "pi pi-check-circle",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE891_course_outline.html",
  },
  {
    name: "Software Project Management",
    icon: "pi pi-list-check",
    courseURL:
      "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/714/",
  },
  {
    name: "Computer Networks",
    icon: "pi pi-wifi",
    courseURL:
      "https://ecb.torontomu.ca/undergraduate/outlines/COE768_course_outline.html",
  },
  {
    name: "Digital Systems Engineering",
    icon: "pi pi-desktop",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE758_course_outline.html",
  },
  {
    name: "Software Design and Architecture",
    icon: "pi pi-sitemap",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE692_course_outline.html",
  },
  {
    name: "Computer Vision",
    icon: "pi pi-image",
    courseURL:
      "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/843/",
  },
  {
    name: "Software Requirement Analysis",
    icon: "pi pi-file",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE691_course_outline.html",
  },
  {
    name: "Operating Systems",
    icon: "pi pi-desktop",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE628_course_outline.html",
  },
  {
    name: "Network Security",
    icon: "pi pi-lock",
    courseURL:
      "https://www.ecb.torontomu.ca/undergraduate/outlines/COE817_course_outline.html",
  },
  {
    name: "Database Systems",
    icon: "pi pi-database",
    courseURL:
      "https://www.torontomu.ca/calendar/2024-2025/courses/computer-science/CPS/510/",
  },
];

export const educationData: EducationInformation[] = [
  {
    degreeType: "Bachelor of Engineering (BEng)",
    fieldName: "Computer Engineering (Software Option)",
    institution: "Toronto Metropolitan University",
    duration: "2019-2024",
    logoURL: TMU,
  },
  {
    degreeType: "High School Diploma",
    fieldName: "Student",
    institution: "Senator O'Connor College School",
    duration: "2015-2019",
    logoURL: OCS,
  },
];
