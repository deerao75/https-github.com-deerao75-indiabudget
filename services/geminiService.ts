
import { GoogleGenAI, Type } from "@google/genai";
import { BudgetContent, DetailItem } from "../types";

// Fixing type mismatch: Updated schema and return object to match BudgetContent interface
export const generateBudgetContent = async (prompt: string): Promise<BudgetContent> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a professional budget alert summary and detailed sections for the India Budget 2026-27 based on this request: ${prompt}. 
    The response must include a main executive summary, and specific sections for Direct Tax Proposals and Indirect Tax Proposals.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          mainSummary: { 
            type: Type.STRING,
            description: "A professional 7-8 line summary of the budget."
          },
          directTax: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              items: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    content: { type: Type.STRING }
                  },
                  required: ["title", "content"]
                }
              }
            },
            required: ["title", "summary", "items"]
          },
          indirectTax: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              items: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    content: { type: Type.STRING }
                  },
                  required: ["title", "content"]
                }
              }
            },
            required: ["title", "summary", "items"]
          }
        },
        required: ["mainSummary", "directTax", "indirectTax"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text || '{}');
    
    // Helper to process items with IDs and images for the UI
    const processItems = (items: any[], prefix: string) => {
      return (items || []).map((item: any, index: number) => ({
        ...item,
        id: `${prefix}-${Math.random().toString(36).substr(2, 9)}`,
        imageUrl: index % 2 === 0 ? `https://picsum.photos/seed/budget-${prefix}-${index}/400/250` : undefined
      })) as DetailItem[];
    };

    // Fix: Correctly mapping the response to the BudgetContent interface
    return {
      mainSummary: data.mainSummary || "",
      directTax: {
        title: data.directTax?.title || "Direct Tax Proposals",
        summary: data.directTax?.summary || "",
        items: processItems(data.directTax?.items, 'dt')
      },
      indirectTax: {
        title: data.indirectTax?.title || "Indirect Tax Proposals",
        summary: data.indirectTax?.summary || "",
        items: processItems(data.indirectTax?.items, 'it')
      }
    };
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Could not generate valid content");
  }
};
