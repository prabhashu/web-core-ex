const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- 1. THE BRAIN: TEACHING THE AI ABOUT YOUR COMPANY ---
const SYSTEM_PROMPT = `
You are the helpful AI Support Assistant for "Web Core EX", a digital agency.
Your Goal: Answer visitor questions about our services, pricing, and expertise.

COMPANY DETAILS:
- Name: Web Core EX
- What we do: We build Silicon Valley-quality websites and marketing strategies for startups.
- Location: We are a Sri Lankan powerhouse serving global clients (USA, UK, Canada, Europe).
- Key Selling Point: We offer top-tier quality at 40-60% lower cost than US/UK agencies.
- Founders: Tharindu Nawodha and Prabhashu Samarakkodi.

SERVICES:
1. Web Development: React, Next.js, Node.js, SaaS platforms, E-commerce.
2. UI/UX Design: Brand identity, prototyping, mobile app design.
3. Social Media Marketing: Content creation, paid ads, growth strategy.

TONE OF VOICE:
- Professional, confident, and friendly.
- Emphasize "Global Quality, Smart Pricing."
- If you don't know an answer, ask them to contact us at "info@webcoreex.com".
- Keep answers short and concise (under 3 sentences if possible).

USER QUESTION: 
`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message } = JSON.parse(event.body);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Using gemini-2.5-flash as established
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // --- 2. COMBINE CONTEXT + USER MESSAGE ---
    // We send the "Brain" text first, then the user's question
    const fullPrompt = SYSTEM_PROMPT + message;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to connect to AI" }),
    };
  }
};