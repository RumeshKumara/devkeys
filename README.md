
# 🚀 DevKeys

**DevKeys** is a modern, AI-powered web application that brings **developer shortcuts, commands, and references** into one place. It helps developers **work faster**, **learn smarter**, and **save their favorite commands** with cloud sync and AI assistance.

---

## 🌟 Features

### 📚 Centralized Developer Shortcuts

* VS Code shortcuts
* Git & GitHub commands
* Linux commands
* Clean, searchable UI

### 🔍 Smart Local Search

* Instant filtering
* Category-based navigation
* Fast and lightweight (JSON-based)

### ⭐ Favorites System

* Save frequently used shortcuts
* User-specific favorites
* Synced with Firebase Firestore

### 🔐 Authentication

* Google Sign-In (Firebase Auth)
* Secure user sessions
* Personalized experience

### 🤖 AI Assistant (Gemini)

* Ask questions about commands & shortcuts
* Get explanations, suggestions, and workflows
* Powered by **Google Gemini API**

### 🎨 Modern UI

* Built with **Next.js App Router**
* Styled using **Tailwind CSS**
* Responsive & mobile-friendly

---

## 🧠 Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Frontend   | Next.js (App Router)    |
| Styling    | Tailwind CSS            |
| Data       | JSON Files              |
| Auth       | Firebase Authentication |
| Database   | Firebase Firestore      |
| AI         | Google Gemini API       |
| Deployment | Vercel                  |

---

## 📁 Project Folder Structure

```
devkeys/
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home page
│   │   ├── shortcuts/          # Shortcuts page
│   │   ├── favorites/          # Favorites page
│   │   ├── ai/                 # AI assistant page
│   │   └── login/              # Login page
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── CategoryTabs.tsx
│   │   └── ShortcutCard.tsx
│   │
│   ├── data/
│   │   ├── vscode.json
│   │   ├── git.json
│   │   └── linux.json
│   │
│   ├── lib/
│   │   ├── firebase.ts
│   │   └── gemini.ts
│   │
│   └── context/
│       └── AuthContext.tsx
│
├── public/
├── .env.local
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

⚠️ Never commit `.env.local` to GitHub.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/devkeys.git
cd devkeys
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the App

```bash
npm run dev
```

Open 👉 `http://localhost:3000`

---

## 🔐 Firebase Setup

1. Create a Firebase project
2. Enable:

   * Authentication → Google Sign-In
   * Firestore Database
3. Copy config values into `.env.local`

---

## 🤖 Gemini AI Setup

1. Visit **Google AI Studio**
2. Generate Gemini API Key
3. Add key to `.env.local`

---

## 📌 Use Cases

* Quickly recall Git commands
* Learn VS Code productivity shortcuts
* Save frequently used Linux commands
* Ask AI for explanations and workflows
* Build muscle memory for daily dev tasks

---

## 🔮 Future Enhancements

* 🌙 Dark mode
* 🧠 AI auto-suggestions while typing
* 📱 PWA offline support
* 🛠 Admin dashboard
* 🧾 User command history

---

## 👨‍💻 Author

**Rumesh Kumara**
📌 Software Developer
📌 Project: *DevKeys*


Just tell me 👍
