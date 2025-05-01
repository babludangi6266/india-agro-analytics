# 🇮🇳 **India Agro Analytics**

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Built with React](https://img.shields.io/badge/Built%20with-React-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)

India Agro Analytics is an interactive data visualization project that presents crop production, yield, and cultivation area statistics in India from **1950 to 2020**. It allows users to explore agricultural insights using clean tables, responsive layouts, and smooth UI — powered by **React**, **Vite**, **Mantine**, and **TypeScript**.

---

## 📌 **Table of Contents**

- [✨ Features](#-features)
- [💻 Tech Stack](#-tech-stack)
- [📸 Screenshots](#-screenshots)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Getting Started](#-getting-started)
- [🧪 Available Scripts](#-available-scripts)
- [🔮 Future Improvements](#-future-improvements)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ **Features**

- ✅ Displays **maximum and minimum crop production** for each year.
- ✅ Shows **average yield and cultivation area** per crop across all years.
- ✅ Uses **interactive tables** for better readability.
- ✅ Built with a **clean and responsive UI**.
- ✅ Fast development with **Vite** and **TypeScript**.

---

## 💻 **Tech Stack**

| 🛠 Technology  | 💡 Purpose                          |
|---------------|-----------------------------------|
| **React**     | UI Development                   |
| **TypeScript**| Type Safety                      |
| **Vite**      | Fast Build Tool                  |
| **Mantine**   | React UI Component Library       |
| **JSON**      | Data Source (Agriculture Stats)  |
| **Custom Utils**| Data Transformation & Analytics |

---

## 📸 **Screenshots**

### 📅 **Year-wise Max & Min Crop Production Table**  
![MaxMin Table](https://github.com/user-attachments/assets/9ed81538-9add-42dc-9c95-c8f46e53b651)

### 🌾 **Average Yield and Cultivation Area Table**  
![Average Table](https://github.com/user-attachments/assets/b9e167f0-2bb1-4450-a197-e30bc5b03981)

---

## 📁 **Folder Structure**

```plaintext
india-agro-analytics/
├── public/                  # Public assets (favicon, images)
├── src/
│   ├── components/          # Reusable React components
│   │   ├── CropMaxMinTable.tsx
│   │   └── CropAverageTable.tsx
│   ├── data/                # Dataset (data.json)
│   ├── utils/               # Data processing functions
│   │   └── dataProcessing.ts
│   ├── App.tsx              # Main application component
│   └── main.tsx             # App entry point
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 **Getting Started**

### Prerequisites

Ensure the following are installed:
- 🖥️ **Node.js** (v14 or higher)
- 🧶 **Yarn** (recommended but optional)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/india-agro-analytics.git
cd india-agro-analytics
```

Using Yarn:
```bash
yarn install
```

Using npm:
```bash
npm install
```

### Running the Development Server

Start the local development server:

Using Yarn:
```bash
yarn dev
```

Using npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

Create a production build:

Using Yarn:
```bash
yarn build
```

Using npm:
```bash
npm run build
```

The build output will be in the `dist` directory.

### Previewing the Production Build

Preview the production build locally:

Using Yarn:
```bash
yarn preview
```

Using npm:
```bash
npm run preview
```

---

## 🧪 **Available Scripts**

| 📜 Command      | 📝 Description                   |
|----------------|----------------------------------|
| `yarn dev`     | Runs the app in development mode |
| `yarn build`   | Builds the app for production    |
| `yarn preview` | Previews the production build    |

---
