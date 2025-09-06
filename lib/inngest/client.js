import {Inngest} from "inngest";

export const inngest =new Inngest({id:"nextstepai",
    name:"NextStepAi",
    credentials:{
        gemini:{
            apiKey:process.env.GEMINI_API_KEY || ""
        }
    }
})