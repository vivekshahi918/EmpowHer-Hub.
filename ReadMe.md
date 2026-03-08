# 🌸 EmpowHer Hub 🌸
### Empowering, Protecting, and Guiding the Modern Woman

**EmpowHer Hub** is an all-in-one digital ecosystem developed for **International Women’s Day**.  
It integrates high-end security features, academic growth tools, social commerce, and personal wellness into a single, secure mobile platform.

---

# 🚀 Project Overview

In a world where digital and physical safety is a priority, **EmpowHer Hub** acts as a **"Digital Shield."**

The platform doesn't just celebrate women; it provides real-world utility by helping them:

- Report harassment with **AI-backed evidence**
- Find **mentors** for their studies
- Support **women-led businesses**
- Receive **daily celestial guidance**

---

# ✨ Key Features

## 🛡️ 1. Smart Security & AI Guardian

**One-Tap SOS**

- Instantly captures precise **GPS coordinates**
- Sends them to **emergency contacts**

**AI Threat Analysis**

- Powered by **OpenAI**
- Scans unwanted messages or emails
- Detects **harassment, toxic language, or threats**

**Automated Police Reporting**

- Integrates with **Resend API**
- Automatically generates a **professional incident report**
- Sends email to authorities with **Google Maps location link**

---

## 📚 2. AI Study Mentor

**Personalized Learning**

- Dedicated **AI Tutor**
- Helps women learn **STEM, business, and leadership**

**Resource Hub**

- Instant advice on:
  - Coding
  - Career growth
  - Academic scholarships

---

## 🛍️ 3. Treva Trends Marketplace

**Women-Led Commerce**

- Shopping platform featuring products from **female entrepreneurs**

**Social Shopping**

- Supports **women-founded brands**
- Encourages **economic empowerment**

---

## 🔮 4. Celestial Empowerment (Astrology)

**AI Horoscopes**

Start every day with **positive AI-generated guidance** based on zodiac signs.

Unlike traditional horoscopes, these are tuned to promote:

- Confidence
- Inner strength
- Career success

---

## 🔐 5. Secure JWT Ecosystem

**Verified Access**

A secure authentication system using:

- **JWT (JSON Web Tokens)**
- **Secure Storage**

Ensures that **user data and private communication remain protected.**

---

# 🛠️ Tech Stack

| Layer | Technology |
|------|-------------|
| Frontend | React Native (Expo) |
| Backend | Node.js & Express |
| Database | MongoDB Atlas |
| Artificial Intelligence | OpenAI (GPT-4o-mini) |
| Communication | Resend API |
| Authentication | JWT |
| Location Services | Google Maps Platform |

---

# ⚙️ Setup & Installation

## 1️⃣ Prerequisites

Install:

- **Node.js (v18+)**
- **Expo Go app** on your mobile device
- API keys for:
  - OpenAI
  - Resend
  - MongoDB Atlas

---

# Backend Configuration

Navigate to backend folder:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_KEY=your_secret_jwt_key
RESEND_API_KEY=your_resend_api_key
OPENAI_API_KEY=your_openai_api_key
```

Start the backend server:
```bash
node api/index.js
```

The backend server should now be running locally.

📱 Frontend Configuration

Navigate to the frontend folder:

```bash
cd frontend
npm install
```

Update the backend API URL inside the following file:
```bash
src/constants/api.ts
```
Example configuration:
```bash
export const API_URL = "http://localhost:5000/api";
```
Start the React Native application:
```bash
npx expo start
```
A QR code will appear in your terminal.

Open the Expo Go app on your mobile device and scan the QR code to launch the application.

---

# 🚀 Deployment

The backend is configured for deployment using **Vercel**.

## Steps to Deploy

1. Push your project to **GitHub**
2. Open the **Vercel Dashboard**
3. Click **Add New Project**
4. Import your **GitHub repository**
5. Vercel will automatically detect the **Node.js environment**
6. Click **Deploy**

Configuration file used for deployment:

```json
vercel.json
```

---

# 🔄 Application Workflows

## 🛡️ Security Scanner Workflow

1. User enters suspicious or unwanted text.
2. The text is sent to the **backend API**.
3. The backend sends the message to **OpenAI** for analysis.
4. OpenAI checks the text for:
   - Harassment
   - Toxic language
   - Threats
5. If a threat is detected:
   - The **Resend API** automatically sends an emergency report email.
   - The email includes a **Google Maps location link** with the user's GPS coordinates.

---

## 📚 AI Study Mentor Workflow

1. User asks a question related to **studies or career guidance**.
2. The request is sent to the **backend server**.
3. The backend forwards the request to **OpenAI**.
4. OpenAI generates **personalized learning advice**.
5. The response is returned and displayed in the **mobile application**.

---

## 🔮 Astrology Workflow

1. User selects their **zodiac sign**.
2. The app sends a request to the **backend server**.
3. The backend calls **OpenAI** to generate an empowering horoscope.
4. A **daily motivational horoscope** is generated.
5. The result is displayed inside the **mobile application**.

---

# 🌟 Future Improvements

- Real-time emergency contact notifications
- Voice-based SOS activation
- In-app chat with AI mentor
- Secure marketplace payment integration
- Community support and mentorship forum

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to contribute:

1. Fork this repository
2. Create a new feature branch

```bash
git checkout -b feature/new-feature
```
3. Commit your changes
```bash
git commit -m "Added new feature"
```
4. Push to your branch
```bash
git push origin feature/new-feature
```
5. Open a Pull Request
---

# 💜 Acknowledgments

Developed for **International Women’s Day 2026** to demonstrate how modern **AI and cloud technologies** can be used to build a safer and more supportive digital ecosystem for women.

> **"Empowering women isn't just a goal; it's a mission we code into reality."**
