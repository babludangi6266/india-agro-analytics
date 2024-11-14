Project Overview
India Agro Analytics is a data analytics project that provides insights into crop production, yield, and area of cultivation in India from 1950 to 2020. Using data visualization, it helps users explore and understand trends in agriculture over the years. The project is built with React and Mantine for the frontend, with additional data processing functions to compute yearly and average statistics.

Features
Displays the crops with maximum and minimum production for each year.
Shows average yield and cultivation area per crop across all available years.
Provides an easy-to-navigate UI with tables and sections.

Setup Instructions
1. Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
Yarn (recommended but optional)
2. Clone the Repository
Clone the project repository from GitHub:
git clone https://github.com/your-username/india-agro-analytics.git
cd india-agro-analytics
3. Install Dependencies
Use Yarn to install the project dependencies:
yarn install

If you're using npm instead, run:
npm install
Running the Project
To start the development server:
yarn dev
or, with npm:
npm run dev
This will launch the project locally, and you can view it in your browser at http://localhost:3000.

Building the Project for Production
To build the project for production, use:
yarn build

or, with npm:
npm run build
The output will be available in the dist directory.

Running the Production Build Locally
After building, you can preview the production build with:
yarn preview

or, with npm:
npm run preview
Folder Structure
plaintext
india-agro-analytics/
├── public/                  # Public assets (e.g., favicon, images)
├── src/
│   ├── components/          # Reusable React components
│   │   ├── CropMaxMinTable.tsx
│   │   └── CropAverageTable.tsx
│   ├── data/                # Dataset file (data.json)
│   ├── utils/               # Data processing functions
│   │   ├── dataProcessing.ts
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── .gitignore
├── README.md
├── package.json
└── vite.config.ts           # Vite configuration
Technologies Used
React: JavaScript library for building user interfaces
Mantine: UI component library for React, used for tables, cards, and styling
Vite: Frontend build tool for fast development
TypeScript: Superset of JavaScript for static typing

Second Table 
![Screenshot 2024-11-14 122500](https://github.com/user-attachments/assets/b9e167f0-2bb1-4450-a197-e30bc5b03981)

First Table
![Screenshot 2024-11-14 122452](https://github.com/user-attachments/assets/9ed81538-9add-42dc-9c95-c8f46e53b651)
