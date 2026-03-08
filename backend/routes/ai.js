const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
const authMiddleware = require('../middleware/authMiddleware');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 1. SECURITY: Analyze Threat & Generate Police Report
// router.post('/analyze-threat', authMiddleware, async (req, res) => {
//     const { text } = req.body;
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: [{
//                 role: "system",
//                 content: "You are a security expert. Analyze the following message for harassment or threats. If it is dangerous, provide a professional summary for a police report. If safe, say 'Safe'."
//             }, { role: "user", content: text }]
//         });

//         const analysis = response.choices[0].message.content;
//         res.json({ analysis, isThreat: !analysis.includes("Safe") });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
router.post('/analyze-threat', authMiddleware, async (req, res) => {
    const { text } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Try switching to 3.5-turbo first for testing
            messages: [{
                role: "system",
                content: "You are a security expert. Analyze the following message for harassment or threats. If dangerous, provide a professional summary for a police report. If safe, say 'Safe'."
            }, { role: "user", content: text }]
        });

        const analysis = response.choices[0].message.content;
        res.json({ analysis, isThreat: !analysis.includes("Safe") });
    } catch (err) {
        // THIS WILL SHOW THE EXACT ERROR IN YOUR BROWSER CONSOLE
        console.error("AI ROUTE ERROR:", err); 
        res.status(500).json({ 
            error: err.message, 
            type: err.type,
            details: "Check your OpenAI Dashboard for billing/quota issues"
        });
    }
});

// 2. STUDY: AI Tutor
router.post('/study-help', authMiddleware, async (req, res) => {
    const { question } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{
                role: "system",
                content: "You are a helpful mentor for women in tech and education. Explain concepts simply."
            }, { role: "user", content: question }]
        });
        res.json({ answer: response.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;