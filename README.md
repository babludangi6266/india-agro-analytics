# 🇮🇳 India Agro Analytics

India Agro Analytics is an interactive data visualization project that presents crop production, yield, and cultivation area statistics in India from **1950 to 2020**. It allows users to explore agricultural insights using clean tables, responsive layout, and smooth UI — powered by **React**, **Vite**, **Mantine**, and **TypeScript**.

---

## ✨ Features

- ✅ Displays **maximum and minimum crop production** for each year
- ✅ Shows **average yield and cultivation area** per crop across all years
- ✅ Uses **interactive tables** for better readability
- ✅ Built with a **clean and responsive UI**
- ✅ Fast development with **Vite** and **TypeScript**

---

## 💻 Tech Stack

| Technology   | Purpose                          |
|--------------|----------------------------------|
| React        | UI Development                   |
| TypeScript   | Type Safety                      |
| Vite         | Fast Build Tool                  |
| Mantine      | React UI Component Library       |
| JSON         | Data Source (Agriculture Stats)  |
| Custom Utils | Data Transformation & Analytics  |

---

## 📸 Screenshots

### 📅 Year-wise Max & Min Crop Production Table  
![MaxMin Table](https://github.com/user-attachments/assets/9ed81538-9add-42dc-9c95-c8f46e53b651)

### 🌾 Average Yield and Cultivation Area Table  
![Average Table](https://github.com/user-attachments/assets/b9e167f0-2bb1-4450-a197-e30bc5b03981)

---

## 📁 Folder Structure

```bash
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
