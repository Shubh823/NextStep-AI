"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const client = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateAIInsights=async (industry)=>{
       const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;

     const response = await client.models.generateText({
      model: "gemini-1.5", // or "gemini-1"
      prompt: prompt,
      temperature: 0.7,
      maxOutputTokens: 500,
    });

  // The returned text is in response.output[0].content[0].text
  const text = response.output?.[0]?.content?.[0]?.text;
  if (!text) throw new Error("No response from AI model");

  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
  return JSON.parse(cleanedText);
}



export async function getIndustryInsights() {
    const { userId } = await auth();
    if (!userId) {
        throw new Error('Not authenticated');
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    });

    if (!user) {
        throw new Error('User not found');
    }

    if (!user.industryInsight) {
       const insights= await generateAIInsights(user.industry);
       const industryInsight= await db.industryInsights.create({
         data:{
            industry:user.industry,
            ...insights,
            nextUpdate:new Date(Date.now()+7*24*60*60*1000),

         }
       });

       return industryInsight;
    }

    return user.industryInsight;
}