import TMU from "../assets/TMU.png";
import OCS from "../assets/senator.png";
import talkif from "../assets/talkifAIScreen.png";
import shipStack from "../assets/ShipStack.png";
import secureBank from "../assets/secureBank.png";
import stockWatch from "../assets/stockWatch.png";

export const profile = {
  name: "Andre D'Souza",
  roles: ["Backend Engineer", "Frontend Developer", "System Designer"],
  email: "andredsouza15@gmail.com",
  linkedin: "https://www.linkedin.com/in/andre-j-d-souza",
  github: "https://github.com/AndreDevelopment",
  resume: "/Andre_DSouza_Resume.pdf",
};

export const skills = [
  { name: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "C#"] },
  { name: "Frameworks", items: ["React", "Node.js", "Vue", "Spring Boot", "SignalR", "Selenium", "Laravel"] },
  { name: "Developer Tools", items: ["VS Code", "Git", "GitHub", "Docker", "Postman", "IntelliJ"] },
  { name: "Databases", items: ["MongoDB", "Firebase", "MySQL", "Postgres"] },
  { name: "Soft Skills", items: ["Communication", "Teamwork", "Problem-solving", "Time Management", "Detail Oriented", "Organized"] },
];

export const work = [
  {
    title: "Junior (MES) Developer",
    company: "DBG Canada",
    duration: "May 2024 – Present",
    duties: [
      "Plan, develop, and implement crucial modules for production monitoring within the Manufacturing Execution System for Canada, while also supporting development requests from the US.",
      "Provide real-time technical support to operations personnel in Canada, US, and Mexico, ensuring timely resolution of all issues.",
      "Develop comprehensive user guides and establish a centralized knowledge base for troubleshooting technical issues across all manufacturing operations.",
      "Lead Steering Committee meetings, report on knowledge base status and module differences, and prioritize feature development through an open issues tracker while facilitating cross-functional teamwork.",
      "Provide interactive training to operations personnel on newly developed modules.",
      "Travel to the US and Mexico for training and collaboration with software developers.",
    ],
  },
  {
    title: "Support Services Assistant",
    company: "Unity Health Providence",
    duration: "July 2021 – August 2021",
    duties: [
      "Transported patients via stretcher to x-ray or echocardiogram appointments.",
      "Cleaned medical equipment and ensured that all devices were fully functional.",
      "Delivered supplies to all medical units in the hospital and long-term care residences.",
    ],
  },
  {
    title: "Student Trainee",
    company: "Toronto Police Service",
    duration: "July 2018 – August 2018",
    duties: [
      "Assisted mechanics in Fleet Services with prepping new police vehicles for service: installing bumpers, lights, and sirens, washing vehicles and removing signage.",
      "Conducted activities for children attending the Blue Jays Rookie League summer camps at various locations across the city.",
      "Attended tours of police units including the K9 unit, marine unit, and forensics.",
      "Participated in the Toronto Police Service float at Caribana 2018.",
    ],
  },
];

export const projects = [
  {
    name: "TalkifAI",
    duration: "Sep 2023 – Apr 2024",
    description:
      "A real-time, multilingual translator web application supporting over 8 languages. Uses NLP and machine translation to deliver accurate, efficient cross-cultural communication.",
    image: talkif,
    stack: ["React", "MongoDB", "C#", ".NET"],
    url: "https://talkifai.azurewebsites.net",
  },
  {
    name: "Ship Stack",
    duration: "Dec 2024 – Jan 2025",
    description:
      "A shipping aggregator tool that optimizes delivery paths to customers in similar residential areas.",
    image: shipStack,
    stack: ["Python", "Vue", "TypeScript"],
    url: "",
  },
  {
    name: "Secure Banking System",
    duration: "April 2024",
    description:
      "A banking application fortified with 256-bit AES encryption, RSA key exchange, and HMAC authentication to safeguard customer information.",
    image: secureBank,
    stack: ["Java", "IntelliJ", "Git"],
    url: "https://github.com/AndreDevelopment/network-security-project",
  },
  {
    name: "StockWatch",
    duration: "November 2023",
    description:
      "A web service that monitors user-specified stocks and notifies them based on real-time information.",
    image: stockWatch,
    stack: ["Python", "React", "MongoDB", "Docker"],
    url: "https://stockwatch.cloud",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering (BEng)",
    field: "Computer Engineering (Software Option)",
    school: "Toronto Metropolitan University",
    duration: "2019 – 2024",
    logo: TMU,
    courses: [
      "Intelligent Systems",
      "Distributed and Cloud Computing",
      "Software Testing",
      "Software Project Management",
      "Computer Networks",
      "Digital Systems Engineering",
      "Software Design and Architecture",
      "Computer Vision",
      "Software Requirement Analysis",
      "Operating Systems",
      "Network Security",
      "Database Systems",
    ],
  },
  {
    degree: "High School Diploma",
    field: "Secondary Education",
    school: "Senator O'Connor College School",
    duration: "2015 – 2019",
    logo: OCS,
    courses: ["Introduction to Computer Science", "Calculus & Vectors", "Advanced Functions"],
  },
];

export const certifications = [
  {
    name: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    description:
      "Apply Python programming logic: variables, data structures, branching, loops, functions, objects and classes.",
    date: "July 6, 2024",
    skills: ["Data Science", "Data Analysis", "Python Programming", "NumPy", "Pandas"],
    url: "https://coursera.org/share/8ec59e77fd2ee10f5608c1a38b063470",
  },
  {
    name: "Generative AI for Educators",
    issuer: "Google",
    description:
      "Use generative AI tools to help develop ideas and content, make more informed decisions, and speed up daily work tasks.",
    date: "June 22, 2024",
    skills: ["Artificial Intelligence", "Large Language Models", "Prompt Design", "Generative AI"],
    url: "https://skillshop.exceedlms.com/student/award/d35AX8AjzvWRDXo3T8qqhuTQ",
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
