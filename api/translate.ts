// api/translate.ts
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Text and targetLanguage are required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `Przetłumacz poniższy tekst na język ${targetLanguage} prostym i zrozumiałym językiem.`,
        },
        { role: "user", content: text },
      ],
    });

    const translation = response.choices[0].message?.content || "";
    res.status(200).json({ translation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Błąd tłumaczenia AI" });
  }
}
