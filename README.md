# 🦠 COVID Stats Dashboard

A mini React dashboard that displays real-time COVID-19 statistics by country.

🔗 **Live Demo:** [covid-stats-dashboard.vercel.app](https://covid-stats-dashboard.vercel.app/)

---

## 📸 Preview

> Select any country from the dropdown to see live stats in Card or Table view.

---

## ✨ Features

- 🌍 Dropdown to select any country (190+ countries)
- 📊 Toggle between **Card View** and **Table View**
- 🎨 Color-coded severity (cases, recovered, deaths)
- 🌐 Global summary bar at the top
- 🏳️ Country flag display
- ⏳ Loading and empty state handling

---

## 🛠️ Tech Stack

- **React** (Vite)
- **useState** + **useEffect** for state & data fetching
- **Plain CSS** — no UI libraries
- **disease.sh API** — free open COVID-19 data

---

## 📁 Project Structure
```
src/
├── components/
│   ├── CountryDropdown.jsx
│   ├── StatsCard.jsx
│   ├── StatsTable.jsx
│   └── ViewToggle.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Run Locally
```bash
git clone https://github.com/ShivenduShivu/COVID_Stats_Dashboard.git
cd covid-stats-dashboard
npm install
npm run dev
```

---

## 📡 API Used

[disease.sh](https://disease.sh/) — Open Disease Data API
```
GET https://disease.sh/v3/covid-19/all
GET https://disease.sh/v3/covid-19/countries
GET https://disease.sh/v3/covid-19/countries/{country}
```

---

## 👨‍💻 Author

Built by **Shivendu** as a React mini class project.
