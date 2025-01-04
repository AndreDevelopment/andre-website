
import { reactive } from "vue";
export interface EducationInformation{
    degreeType:string
    fieldName:string
    institution:string
    duration:string
    logoURL:string

  }

interface Course{
  name:string
  icon:string
  courseURL:string

}

export const courses: Course[] = [
  {
    name: "Introduction to Programming",
    icon: "pi pi-code", 
    courseURL: "https://example.com/programming101"
  },
  {
    name: "Data Structures and Algorithms", 
    icon: "pi pi-code",
    courseURL: "https://example.com/dsa"
  }
];
  

   export const educationData = reactive({

        institutions:[    {
            degreeType: "Bachelor of Engineering (BEng)",
            fieldName: "Computer Engineering (Software)",
            institution: "Toronto Metropolitan University",
            duration: "2019-2024",
            logoURL: "https://www.torontomu.ca/content/dam/brand/global/images/brand-toolkit/brand-toolkit-1.jpg",
          },
          {
            degreeType: "High School Diploma",
            fieldName: "Student",
            institution: "Senator O'Connor College School",
            duration: "2015-2019",
            logoURL: "https://media.licdn.com/dms/image/v2/C4E0BAQGBP8fhb9sIsQ/company-logo_200_200/company-logo_200_200/0/1651124489779?e=2147483647&v=beta&t=WrzeIweCt5KKL7GQFRfYauNLVQGhfQ83gR0yzq1sce0",
          },]

   })