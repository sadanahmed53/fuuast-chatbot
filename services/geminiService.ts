
import { GoogleGenAI } from "@google/genai";
import { FUUAST_KNOWLEDGE } from "../data/knowledgeBase";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (userQuery: string) => {
  // Construct context from our "RAG" source
  // In a real production app, we would use vector embeddings to filter this list
  // For this project scope, we pass the relevant knowledge chunks as context
  const context = FUUAST_KNOWLEDGE.map(
    item => `[Source: ${item.source}, Page: ${item.page}]: ${item.content}`
  ).join("\n\n");

  const systemPrompt = `
    You are an AI assistant for the Federal Urdu University of Arts, Science and Technology (FUUAST), Gulshan Campus.
    Your objective is to provide professional, accurate answers based ONLY on the provided context below.
    
    CRITICAL RULES:
    1. Always include citations in the format: (Source Name, Page Number).
    2. If the answer is not in the context, politely state that you only have information from official campus documents and advise the user to contact the administration.
    3. Keep answers concise and helpful for students, parents, and visitors.
    4. Provide answers in English unless specifically asked in Urdu.
    
    CONTEXT:
    ${context}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.1, // Low temperature for accuracy
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate response. Please check your connection or API key.");
  }
};
