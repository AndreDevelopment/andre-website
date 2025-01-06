
export interface CertificationInformation{
    name:string;
    description:string;
    date:string;
    skills:string[]
    credentialLink:string;
    companyImgURL:string
}

export const certificationsData: CertificationInformation[] = [
    { 
      name: 'Python for Data Science, AI & Development', 
      description: 'Apply Python programming logic Variables, Data Structures, Branching, Loops, Functions, Objects & Classes.', 
      date: 'Issued July 6, 2024', 
      skills: ["Data Science", "Data Analysis", "Python Programming", "Numpy", "Pandas"], 
      credentialLink:'https://coursera.org/share/8ec59e77fd2ee10f5608c1a38b063470',
      companyImgURL: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80' 
    },
    { 
      name: 'Generative AI for Educators Certificate', 
      description: 'Use generative AI tools to help develop ideas and content, make more informed decisions, and speed up daily work tasks', 
      date: 'Issued June 22, 2024', 
      skills: ["Artificial Intelligence (AI)", "Large Language Models (LLMs)", "Prompt Design", "Generative AI"] ,
      credentialLink:'https://skillshop.exceedlms.com/student/award/d35AX8AjzvWRDXo3T8qqhuTQ',
      companyImgURL: '' 
    },

  ];