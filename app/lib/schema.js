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