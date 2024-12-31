import { reactive } from "vue";
import TalkifAIImg from '../assets/talkifAIScreen.png'

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
          description: "Constructed a real-time, multilingual web application supporting over 8 languages,"
            +"utilizing cutting-edge NLP and machine translation to deliver accurate and efficient cross-cultural communication",
          imageURL: TalkifAIImg,
          techStack: ["React", "MongoDB", "SignalR"],
          projectURL: "https://talkifai.azurewebsites.net",
        },
        // {
        //   name: "Project 2",
        //   description: "Description of Project 2",
        //   imageURL: "path/to/image2.jpg",
        //   techStack: ["React", "Node.js", "MongoDB"],
        //   projectURL: "https://project2.com",
        // },

    ]
});