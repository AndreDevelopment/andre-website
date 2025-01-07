
export interface CertificationInformation{
    name:string;
    description:string;
    date:string;
    skills:string[]
    credentialLink:string;
    companyIcon:string
}

export const certificationsData: CertificationInformation[] = [
    { 
      name: 'Python for Data Science, AI & Development', 
      description: 'Apply Python programming logic Variables, Data Structures, Branching, Loops, Functions, Objects & Classes.', 
      date: 'Issued July 6, 2024', 
      skills: ["Data Science", "Data Analysis", "Python Programming", "Numpy", "Pandas"], 
      credentialLink:'https://coursera.org/share/8ec59e77fd2ee10f5608c1a38b063470',
      companyIcon: 'devicon-spss-plain' 
    },
    { 
      name: 'Generative AI for Educators Certificate', 
      description: 'Use generative AI tools to help develop ideas and content, make more informed decisions, and speed up daily work tasks', 
      date: 'Issued June 22, 2024', 
      skills: ["Artificial Intelligence (AI)", "Large Language Models (LLMs)", "Prompt Design", "Generative AI"] ,
      credentialLink:'https://skillshop.exceedlms.com/student/award/d35AX8AjzvWRDXo3T8qqhuTQ',
      companyIcon: 'devicon-google-plain' 
    },

  ];