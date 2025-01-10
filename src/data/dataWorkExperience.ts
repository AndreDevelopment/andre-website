export interface WorkInformation {
  jobTitle: string;
  company: string;
  companyImgURL: string;
  duration: string;
  duties: string[];
}

export const keyWords = ['Manufacturing', 'Execution', 'System'];

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
    jobTitle: "Support Services Assistant",
    company: "Unity Health Providence",
    companyImgURL:
      "https://media.licdn.com/dms/image/v2/D560BAQGQuF_p988bOA/company-logo_200_200/company-logo_200_200/0/1719924355191/unityhealthtoronto_logo?e=2147483647&v=beta&t=V3eXYuxf9Z7ZrggAKOnBYGNZN6u_pjAcGm31mGxY6nw",
    duration: "July 2021 – August 2021",
    duties: [
      "Transported patients via stretcher to x-ray or echocardiogram appointments.",
      "Cleaned medical equipment and ensured that all devices were fully functional.",
      "Delivered supplies to all medical units in the hospital and long-term care residences.",
    ],
  },
  {
    jobTitle: "Student Trainee",
    company: "Toronto Police Service",
    companyImgURL:
      "https://media.licdn.com/dms/image/v2/C4E0BAQEXHCK87APf4A/company-logo_200_200/company-logo_200_200/0/1630604120456/toronto_police_service_logo?e=2147483647&v=beta&t=nb0zHbK3zipJCcABziBsI8ou7xAkyL0gW0UOASGAwx8",
    duration: "July 2018 – August 2018",
    duties: [
      "Assisted mechanics in Fleet Services with prepping new police vehicles for service-installation of bumpers, lights, and sirens, washing of vehicles and removal of signage.",
      "Conducted activities for children attending the Blue Jays Rookie League summer camps at various locations across the city.",
      "Attended tours of police units including the K9 unit, marine unit, and forensics.",
      "Participated in the Toronto Police Service float at Caribana 2018.",
    ],
  },
];
