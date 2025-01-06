
import TalkifAIImg from '../assets/talkifAIScreen.png'
import secureBank from '../assets/secureBank.png'
import stockWatch from '../assets/stockWatch.png'
import shipStack from '../assets/ShipStack.png'

export const codeIcons: Record<string, string> = {
  'python': 'devicon-python-plain',
  'java': 'devicon-java-plain',
  'c#': 'devicon-csharp-plain',
  'react':'devicon-react-original',
  'vue':'devicon-vuejs-plain',
  'typescript':'devicon-typescript-plain',
  'mongodb':'devicon-mongodb-plain',
  'docker':'devicon-docker-plain',
  'javascript':'devicon-javascript-plain',
  '.net':'devicon-dotnetcore-plain',
  'git':'devicon-git-plain',
  'github':'devicon-github-original',
  'vscode':"devicon-vscode-plain",
  'intellij':'devicon-intellij-plain'
};


export interface ProjectInformation{
  name:string
  duration:string
  description:string
  imageURL:string
  techStack:string[]
  projectURL:string
}

export const projectData:ProjectInformation[] =[
  {
    name: "TalkifAI",
    duration:"September 2023 - April 2024",
    description: "A real-time, multilingual translator web application supporting over 8 languages."
      +" Utilizes cutting-edge NLP and machine translation to deliver accurate and efficient cross-cultural communication",
    imageURL: TalkifAIImg,
    techStack: ["React", "MongoDB", "C#",'.NET'],
    projectURL: "https://talkifai.azurewebsites.net",
  },
  {
    name: "Ship Stack",
    duration:"December 2024 - January 2025",
    description: "A shipping aggregator tool used to optimize the delivery path to customers in similar residential areas",
    imageURL: shipStack,
    techStack: ["Python","vue","typescript"],
    projectURL: "",
  },
  {
    name: "Secure Banking System",
    duration:"April 2024",
    description: "A comprehensive banking application fortified with 256-bit AES encryption,"
    +" RSA key exchange, and HMAC authentication to safeguard customers information",
    imageURL: secureBank,
    techStack: ["Java","Intellij","git"],
    projectURL: "https://github.com/AndreDevelopment/network-security-project",
  },
  {
    name: "StockWatch",
    duration:"November 2023",
    description: "A web service application that will monitor user specified stocks and notify them based on real-time information" ,
    imageURL: stockWatch,
    techStack: ["Python", "React", "MongoDB","Docker"],
    projectURL: "https://stockwatch.cloud",
  },

]

