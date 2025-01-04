
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
    name: "Introduction to Programming",
    icon: "pi pi-code",
    courseURL: "https://example.com/programming101",
  },
  {
    name: "Data Structures and Algorithms",
    icon: "pi pi-code",
    courseURL: "https://example.com/dsa",
  },
];

export const educationData: EducationInformation[] = [
  {
    degreeType: "Bachelor of Engineering (BEng)",
    fieldName: "Computer Engineering (Software)",
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
