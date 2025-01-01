import { reactive } from "vue";
import TalkifAIImg from '../assets/talkifAIScreen.png'
import secureBank from '../assets/secureBank.png'
import stockWatch from '../assets/stockWatch.png'

export interface ProjectInformation{
  name:string
  description:string
  imageURL:string
  techStack:[string]
  projectURL:string
}

 export const projectData = reactive({

    projects: [
        {
          name: "TalkifAI",
          description: "A real-time, multilingual web application supporting over 8 languages."
            +" Utilizes cutting-edge NLP and machine translation to deliver accurate and efficient cross-cultural communication",
          imageURL: TalkifAIImg,
          techStack: ["React", "MongoDB", "SignalR"],
          projectURL: "https://talkifai.azurewebsites.net",
        },
        {
          name: "Secure Banking System",
          description: "A comprehensive banking application fortified with 256-bit AES encryption,"
          +"RSA key exchange, and HMAC authentication to safeguard customers information",
          imageURL: secureBank,
          techStack: ["Java", "JavaFX", "javax.crypto"],
          projectURL: "https://github.com/AndreDevelopment/network-security-project",
        },
        {
          name: "StockWatch",
          description: "Developed a web service application that will monitor user specified stocks and notify them based on real-time information" ,
          imageURL: stockWatch,
          techStack: ["Python", "React", "MongoDB","Docker"],
          projectURL: "https://stockwatch.cloud",
        },

    ]
});