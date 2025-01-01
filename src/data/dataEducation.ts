
import { reactive } from "vue";
export interface EducationInformation{
    degreeType:string
    fieldName:string
    institution:string
    duration:string
    logoURL:string

  }
  

   export const educationData = reactive({

        institutions:[    {
            degreeType: "Bachelor of Engineering (BEng)",
            fieldName: "Computer Engineering (Software)",
            institution: "Toronto Metropolitan University (formally Ryerson)",
            duration: "2019-2024",
            logoURL: "https://www.torontomu.ca/content/dam/brand/global/images/brand-toolkit/brand-toolkit-1.jpg",
          },
          {
            degreeType: "High School Diploma",
            fieldName: "Student",
            institution: "Senator O'Connor College School",
            duration: "2015-2019",
            logoURL: "https://cmsv2-assets.apptegy.net/uploads/12725/logo/14322/senator-oconnor.png",
          },]

   })