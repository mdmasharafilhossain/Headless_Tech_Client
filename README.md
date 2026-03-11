# User Feedback Intelligence System - Frontend

This repository contains the frontend application for the **AI-Powered User Feedback Intelligence System**.

The application allows users to submit feedback, automatically analyze it using AI, and view feedback insights in an organized interface.

The frontend communicates with the backend API and provides a clean, responsive interface for submitting and managing feedback data.

AI analysis is performed in the backend using **LangChain.js and Google Gemini**, while the frontend focuses on **user experience, feedback submission, and intelligent filtering of feedback data**.

---

# Related Links

Frontend Repository:  
https://github.com/mdmasharafilhossain/Headless_Tech_Client

Backend Repository:  
https://github.com/mdmasharafilhossain/Headless_Tech_Server

Live Application (Backend):  
https://headless-tech-server.vercel.app

Live Application (Frontend):  
https://headless-client-six.vercel.app

---

# Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Axios
- SweetAlert2
- React Router
- Vite

---

# Features

## Feedback Submission System

Users can easily submit feedback using a clean and intuitive interface.

Each feedback includes:

- User Name
- Feedback Message
- Email (optional)

Once submitted:

1. The frontend sends feedback data to the backend
2. The backend processes the message using AI
3. AI extracts insights and stores them in the database
4. The responsible team receives an email notification

---

## AI-Powered Feedback Intelligence

Although AI processing happens in the backend, the frontend displays AI insights clearly.

Each feedback includes:

- **Category**
- **Priority**
- **Sentiment**
- **Assigned Team**

Example feedback card display:
```bash
Name: John Doe
Message: The login system is very slow.

Category: Performance
Priority: High
Sentiment: Negative
Team: Backend
```
## Feedback Search & Filtering

Users can filter feedback using:

- Name search
- Category filter
- Priority filter

Example use cases:

- Find all **high priority issues**
- Find all **performance-related feedback**
- Search feedback submitted by a specific user

This helps in quick feedback analysis.
## UI & Experience

The interface is designed to be:

- Clean
- Modern
- Responsive
- Easy to navigate

Key UI features include:

✅ Tailwind-based responsive layout  
✅ Modal-based feedback submission  
✅ Card-based feedback display  
✅ Smooth transitions and hover effects  
✅ SweetAlert notifications for success and errors  
✅ Filter bar for quick search  

---
# How to Run the Frontend

## 1️⃣ Clone Repository

```bash
git clone https://github.com/mdmasharafilhossain/Headless_Tech_Client
cd Headless_Tech_Client
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Environment Variables

Create a `.env.local` file:

```bash
VITE_API_URL=http://localhost:5000/api
```

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---