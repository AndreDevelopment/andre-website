import emailjs from "@emailjs/browser";


export const sendEmail = (userName:string,userEmail:string,message:string)=>{


    const publicKey = import.meta.env.VITE_API_KEY as string;
    console.log(publicKey);
    
    (() => {
        emailjs.init({
          publicKey,
        });
      })();
    const params = {
        userName:userName,
        userEmail:userEmail,
        message:message
    }
    const serviceID = import.meta.env.VITE_SERVICE_ID as string;
    const templateID = import.meta.env.VITE_TEMPLATE_ID as string;

    emailjs.send(serviceID!, templateID!, params);
    
};
