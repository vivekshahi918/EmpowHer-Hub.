const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/alert', authMiddleware, async (req, res) => {
    const { userName, location, textToScan } = req.body;

    try {
        // 1. Ask OpenAI to analyze the threat
        const aiResponse = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{
                role: "system",
                content: "You are a women's safety assistant. Analyze the text for harassment or threats. If dangerous, start your reply with 'THREAT_DETECTED' followed by a summary for the police. If safe, say 'SAFE'."
            }, { role: "user", content: textToScan }]
        });

        const analysis = aiResponse.choices[0].message.content;

        // 2. If OpenAI flags it, send the email automatically
        if (analysis.includes("THREAT_DETECTED")) {
            await resend.emails.send({
                from: 'security@empowher.com',
                to: 'police-dept@example.com', // Replace with real email
                subject: `🚨 EMERGENCY: Harassment Report for ${userName}`,
                html: `
                    <h1>Security Alert</h1>
                    <p><strong>AI Analysis:</strong> ${analysis}</p>
                    <p><strong>User Location:</strong> 
                       <a href="https://maps.google.com/?q=${location.latitude},${location.longitude}">
                       Click here to see user location on Google Maps
                       </a>
                    </p>
                `
            });
            return res.json({ msg: "Threat detected. Police have been notified with your location." });
        }

        res.json({ msg: "Scan complete. No immediate threat found." });

    } catch (err) {
        res.status(500).json({ error: "AI Scan failed." });
    }
});