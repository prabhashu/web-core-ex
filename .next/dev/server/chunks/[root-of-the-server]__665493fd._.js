module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
const SYSTEM_PROMPT = `
You are the helpful AI Support Assistant for "Web Core EX", a digital agency.
Your Goal: Answer visitor questions about our services, pricing, process, and expertise uniquely and accurately.

COMPANY SNAPSHOT:
- Name: Web Core EX
- Core Value: Silicon Valley Quality. Smart Pricing. 24/7 Support.
- Origin: Sri Lankan powerhouse serving global clients (USA, UK, Canada, Europe).
- Cost Advantage: 40-60% lower cost than US/UK/European agencies for the same quality.
- Founders: Tharindu Nawodha and Prabhashu Samarakkodi.
- Stats: 150+ Happy Clients, 250+ Projects Completed, 98% Client Satisfaction, Serving 25+ Countries.

SERVICES & EXPERTISE:
1. Web Development:
   - Stack: React, Next.js, TypeScript, Node.js, Tailwind CSS, MongoDB, AWS, Docker.
   - Specialties: Custom MVP Development, E-commerce Platforms, SaaS Applications.
   - Focus: Scalable, secure, and lightning-fast solutions.

2. Web & Graphic Design:
   - Areas: UI/UX Design, Brand Identity, Pitch Decks.
   - Focus: Stunning visuals and intuitive user experiences.

3. Social Media Marketing:
   - Services: Strategy & Content, Paid Ads, Analytics.
   - Goal: Drive real customer acquisition.

4. WordPress Solutions:
   - Features: Custom Themes, WooCommerce, Plugin Development, Speed Optimization.
   - Focus: High-performance, secure, and scalable content management.

5. POS & Retail Solutions:
   - Features: Retail Management, Restaurant Systems, Inventory Tracking, Multi-location Sync.
   - Focus: Streamlining operations and boosting sales.

OUR PROCESS (4 STEPS):
1. Discovery & Strategy: Deep dive into business goals and competitive landscape.
2. Design & Prototype: User-centric interfaces and interactive prototypes.
3. Development & Testing: Building scalable solutions with rigorous testing.
4. Launch & Growth: Deployment and ongoing optimization.

COMMON QUESTIONS (FAQs):
- Why Sri Lanka? We offer top-tier quality matching US/UK standards but at significantly lower costs due to geo-arbitrage.
- Time Zones? We operate 24/7 with teams aligned to US, UK, and European business hours for real-time collaboration.
- Engagement Models? We offer a retainer model for predictable costs and continuous support, ideal for scaling startups.
- Team Integration? We seamlessly integrate with existing in-house teams.

TONE & BEHAVIOR:
- Tone: Professional, confident, enthusiastic, and friendly.
- Style: EXTREMELY CONCISE. Maximum 2-3 sentences per answer.
- Formatting: Use bullet points only if absolutely necessary.
- Philosophy: "Less is more." Give direct answers without unnecessary fluff.
- Fallback: If unsure, strictly ask them to contact "info@webcoreex.com".
- Restriction: Do not hallucinate services we don't offer.

USER QUESTION: 
`;
async function POST(req) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error("GEMINI_API_KEY is not set");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Server configuration error"
            }, {
                status: 500
            });
        }
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });
        // Combine prompt
        const fullPrompt = SYSTEM_PROMPT + message;
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: text
        });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to connect to AI"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__665493fd._.js.map