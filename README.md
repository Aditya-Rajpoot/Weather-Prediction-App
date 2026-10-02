<div align="center">

# 🌤️ Weather Prediction App

**A sleek, responsive weather app built with React that shows real-time weather conditions for any city in the world.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![MUI](https://img.shields.io/badge/MUI-Components-007FFF?logo=mui&logoColor=white)](https://mui.com)

[Live Demo](https://weather-prediction-app-psi.vercel.app/)

</div>

---

## Overview

A clean, glassmorphism-styled weather app that fetches live conditions for any city via the OpenWeatherMap API. The UI dynamically shifts its background gradient and icons based on real-time weather — sunny, rainy, snowy, cloudy, and more — rather than using a static layout.

## ✨ Features

- 🔍 **City Search** — Get instant weather updates for any city worldwide
- 🌡️ **Live Weather Data** — Temperature, feels-like, humidity, min/max temp
- 🎨 **Dynamic UI** — Background gradient and icons change automatically based on current weather (clear, rain, snow, thunderstorm, mist, clouds, etc.)
- 📱 **Responsive Design** — Clean glassmorphism-style card UI that works across devices
- ⚠️ **Error Handling** — Friendly message when an invalid city is searched

## 🛠️ Tech Stack

- **React 19** (with Vite)
- **Material UI (MUI)** — components & icons
- **Emotion** — styling
- **OpenWeatherMap API** — live weather data

## 📸 Preview

Search any city and instantly see its current weather with a matching dynamic background.

## ⚙️ Getting Started

### Prerequisites
- Node.js and npm
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation
```bash
git clone https://github.com/Aditya-Rajpoot/weather-prediction-app.git
cd weather-prediction-app
npm install
```

Create a `.env` file in the root directory and add your OpenWeatherMap API credentials:

```env
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather?
VITE_API_KEY=your_openweathermap_api_key
```

```bash
npm run dev
```

## 🗺️ Roadmap

- [ ] 5-day forecast view
- [ ] Geolocation-based auto-detect (current location weather)
- [ ] Unit toggle (°C / °F)
- [ ] Recent search history

## 🌐 Deployment

This project is deployed on **Vercel**: 🔗 [weather-prediction-app-psi.vercel.app](https://weather-prediction-app-psi.vercel.app/)

## 👤 Author

Built by **Aditya Rajpoot**
