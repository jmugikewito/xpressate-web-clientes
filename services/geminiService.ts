
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Initializing GoogleGenAI with the apiKey property as required by guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const improveText = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Optimiza y mejora la redacción del siguiente mensaje de sugerencia para que sea más profesional y constructivo sin perder su esencia original: "${text}"`,
      config: {
        temperature: 0.7,
      }
    });
    // Fix: Accessing text via .text property (not a method)
    return response.text || text;
  } catch (error) {
    console.error("Error improving text with Gemini:", error);
    return text;
  }
};

export const asiaChat = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  try {
    // Fix: Using generateContent for history-based chat with system instructions in the config
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: 'Eres ASIA, la asistente inteligente de XPRESSATE. Tu objetivo es guiar al usuario en la plataforma SAAS y recolectar feedback constructivo. Sé profesional, amable y eficiente.',
      }
    });

    // Fix: Accessing text via .text property
    return response.text;
  } catch (error) {
    console.error("Error in ASIA chat:", error);
    return "Lo siento, tuve un problema técnico. ¿En qué más puedo ayudarte?";
  }
};
