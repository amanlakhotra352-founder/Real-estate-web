
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface MarketInsight {
  analysis: string;
  recommendations: string[];
  confidence: number;
}

export const getMarketInsight = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a real estate investment advisor for Efren Ortiz, a broker in Homewood, IL. 
      Answer this client question professionally: "${query}". 
      Mention that Efren specializes in the Chicago Southland area and has 8+ years of experience.
      Keep it high-value, sophisticated, and professional.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm sorry, I couldn't generate an insight at this moment. Please contact Efren directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Market insights are temporarily unavailable. Please connect with Efren for a personal consultation.";
  }
};
