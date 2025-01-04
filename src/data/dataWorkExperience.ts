export interface WorkInformation {
  jobTitle: string;
  company: string;
  companyImgURL: string;
  duration: string;
  duties: string[];
}

export const workData: WorkInformation[] = [
  {
    jobTitle: "Junior (MES) Developer",
    company: "DBG Canada",
    companyImgURL:
      "https://media.licdn.com/dms/image/v2/C4E0BAQHd_dSBNm_G3Q/company-logo_200_200/company-logo_200_200/0/1639694600713/dbg_canada_limited_logo?e=2147483647&v=beta&t=TDiZy2F1Jm6GP9GuwFVADjaNoVOC2Jp1AVirDxdDMGM",
    duration: "May 2024 - Present",
    duties: [
      "Plan, develop, and implement crucial modules for production monitoring within the Manufacturing Execution System for Canada, while also supporting development requests from the US.",
      "Provide real-time technical support to operations personnel in Canada, US, and Mexico, ensuring timely resolution of all issues.",
      "Develop comprehensive user guides and establish a centralized knowledge base for troubleshooting technical issues across all manufacturing operations.",
      "Leading Steering Committee meetings, report on knowledge base status, module differences, and prioritize feature development through an open issues tracker while facilitating cross-functional teamwork.",
      "Provide interactive training to operations personnel on newly developed modules.",
      "Travel to US and Mexico for training and collaboration with software developers.",
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "Google",
    companyImgURL:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=2147483647&v=beta&t=fnMgfquTmN5LLPDz_pQ3ABlHsrgISwU9CQS35ol7QpE",
    duration: "2018 - Present",
    duties: [
      "Developed and maintained high-performance, scalable backend services.",
      "Designed and implemented RESTful APIs.",
      "Collaborated with cross-functional teams (Product, Design, QA) to deliver successful projects.",
      "Contributed to open-source projects.",
    ],
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Amazon",
    companyImgURL:
      "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_200_200/company-logo_200_200/0/1630640869849/amazon_logo?e=2147483647&v=beta&t=a5B7I1UaO0ruEdmvO_Ojbq4HW61CWsJk535_kW66RfU",
    duration: "2016 - 2018",
    duties: [
      "Built and maintained both frontend (React) and backend (Node.js) applications.",
      "Worked on agile development methodologies (Scrum, Kanban).",
      "Improved website performance and user experience.",
      "Participated in code reviews and provided constructive feedback.",
    ],
  },
];
