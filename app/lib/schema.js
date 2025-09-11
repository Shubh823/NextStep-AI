
import { Description } from '@radix-ui/react-dialog';
import {boolean, z} from 'zod';

export const onboardingSchema = z.object({
    industry: z.string({required_error: "Industry is required"}),
    subIndustry: z.string({
        required_error: "please select a specialization",
    }),
    bio: z.string().max(500, "Bio must be at most 500 characters").optional(),
    experience: z.string()
    .transform((val)=>parseInt(val,10))
    .pipe(
        z.number()
        .min(0,"Experience must be at least 0")
        .max(50,"Experience must be at most 50")
    ),
    skills: z.string().transform((val)=> val ? val.split(',').map((skill)=> skill.trim()).filter(Boolean):undefined),
    
})


export const contactSchema=z.object({
    email:z.string().email("Invalid email address"),
    mobile:z.string().optional(),
    linkedin:z.string().optional(),
    twitter:z.string().optional(),
});

export const entrySchema=z.object({
    title:z.string().min(1,"Title is required"),
    organization:z.string().min(1,"Organization is required"),
    startDate:z.string().min(1,"start date is required"),
    endDate:z.string().optional(),
    description:z.string().min(1,"Description is required"),
    current:z.boolean().default(false),
}).refine((data)=>{
    if(!data.current && !data.endDate){
        return false;
    }
    return true;
},{message:"If the job is not current, then the end date is required"});

export const resumeSchema=z.object({
    contactInfo:contactSchema,
    summary:z.string().min(1,"Professional summary is required"),
    skills:z.string().min(1,"Skills are required"),
    experience:z.array(entrySchema).optional(),
    education:z.array(entrySchema),
    projects:z.array(entrySchema),
});