# 🚀 ADmyBRAND Analytics Dashboard

An AI-powered, modern, and responsive analytics dashboard for digital marketing agencies. Built with **Next.js**, **Tailwind CSS**, **ShadCN UI**, and **Recharts**, this dashboard offers real-time metrics, exportable tables, animations, dark mode, and more.

---

## 🔧 Tech Stack

### 🚀 Core Technologies
- **Next.js 14 (App Router + TypeScript)**
- **React 18**
- **Tailwind CSS** – Utility-first styling
- **ShadCN UI** – Component library (based on Radix UI + Tailwind Variants)
- **Lucide Icons** – Modern icon set
- **Recharts** – Interactive, responsive charts
- **jsPDF & PapaParse** – PDF/CSV export
- **React Hot Toast / Sonner** – Toast notifications
- **Framer Motion** – Smooth chart/card animations

---

## 📦 Features

### 📊 Dashboard Overview
- ✅ KPI Metric Cards (Revenue, Users, Conversions, Growth)
- ✅ 3 Interactive Chart Types (Line, Bar, Pie)
- ✅ Dynamic real-time simulation (e.g., user & revenue growth)
- ✅ Live updating user table
- ✅ Search, Sort, Filter, Pagination
- ✅ Export to **CSV** and **PDF**
- ✅ **Date Range Filter** to filter users by createdAt
- ✅ **Dark/Light Mode Toggle** using `ThemeToggle`
- ✅ Responsive Layout (Desktop, Tablet, Mobile)

---

## ✨ Custom Features Added

You added several advanced features during development:
- ✅ **Real-time auto-increment** of KPI metrics every 3 seconds by 0.01%
- ✅ **Dynamic data binding**: users count in cards based on table `length`
- ✅ **Add User Modal**: form to add a new user
- ✅ **Date Range Filter** for filtering user table entries
- ✅ **Toast notifications** (Sonner) for feedback on actions (e.g., export)
- ✅ **Framer Motion**: animated chart & metric card transitions
- ✅ UI fix: repositioned “Hello Admin” beside theme toggle

---

## 🧠 Challenges Faced

| #  | Challenge | Solution |
|----|-----------|----------|
| 1. | `darkMode: 'class'` wasn't working | Moved Tailwind config properly and added class-based toggling |
| 2. | `autoTable is not a function` error | Fixed by installing `jspdf-autotable` correctly with `npm install jspdf jspdf-autotable` |
| 3. | Hydration Mismatch Warning | Used `useEffect` + `isClient` check before rendering charts |
| 4. | Dark mode toggle only worked one-way | Fixed toggle state using `ThemeProvider` and `useTheme()` |
| 5. | Recharts didn’t animate | Wrapped cards with `FramerMotion` and `AnimatedMetricCard` |
| 6. | Date filter logic with string-based dates | Handled using native JS `Date` comparisons |
| 7. | UI broken after installing ShadCN | Fixed by reapplying Tailwind config and base styles |
| 8. | CSV and PDF export failed | Properly integrated `papaparse` and `jspdf-autotable` libraries |

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard Overview](./public/Screenshot%202026-03-10%20011543.png)

### Dashboard with Charts
![Dashboard with Charts](./public/Screenshot%202026-03-10%20011656.png)

### Data Table & Export Features
![Data Table & Export Features](./public/Screenshot%202026-03-10%20011757.png)

---

## 🔗 Live Demo

https://admybrand-dashboard-project-kupc.vercel.app


---
 

## 🧪 AI Usage Report

### AI Tools Used
- **ChatGPT** – component planning, debugging, refactoring
- **v0.dev** – for basic ShadCN component templates
- **GitHub Copilot** – boilerplate + autocompletion

### Sample Prompts
- "Create a user table with search, sort, pagination, and export"
- "Simulate real-time growth by incrementing a number every 3 seconds"
- "Fix hydration mismatch in React charts"

### AI vs Manual Work Split
- **AI-generated**: ~60% (component templates, feature planning)
- **Manual coding**: ~40% (custom animation, integration, styling)
- **Customization**: Refactored most AI output, added FramerMotion, handled errors manually

---

## ✅ Conclusion

This dashboard demonstrates My skills in:
- Frontend engineering
- UI/UX polish
- Real-time interactivity
- AI-assisted coding workflow
- Problem-solving in modern dev stacks

 

