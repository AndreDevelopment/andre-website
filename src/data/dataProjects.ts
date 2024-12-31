import { reactive } from "vue";

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
          description: "Real time multilingual Translator",
          imageURL: "path/to/image1.jpg",
          techStack: ["React", "MongoDB", "SignalR"],
          projectURL: "https://talkifai.azurewebsites.net/",
        },
        {
          name: "Project 2",
          description: "Description of Project 2",
          imageURL: "path/to/image2.jpg",
          techStack: ["React", "Node.js", "MongoDB"],
          projectURL: "https://project2.com",
        },

    ]
});