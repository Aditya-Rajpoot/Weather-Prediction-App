🌤️ Weather Prediction App

A sleek, responsive weather app built with React that shows real-time weather conditions for any city in the world. The UI dynamically shifts its background gradient and icons based on live weather conditions — sunny, rainy, snowy, cloudy, and more.

🔗 Live Demo: weather-prediction-app-psi.vercel.app

✨ Features
🔍 City Search — Get instant weather updates for any city worldwide
🌡️ Live Weather Data — Temperature, feels-like, humidity, min/max temp
🎨 Dynamic UI — Background gradient and icons change automatically based on current weather (clear, rain, snow, thunderstorm, mist, clouds, etc.)
📱 Responsive Design — Clean glassmorphism-style card UI that works across devices
⚠️ Error Handling — Friendly message when an invalid city is searched

🛠️ Tech Stack
React 19 (with Vite)
Material UI (MUI) — components & icons
Emotion — styling
OpenWeatherMap API — live weather data
📸 Preview

Search any city and instantly see its current weather with a matching dynamic background.

Environment Variables
Create a .env file in the root directory and add your OpenWeatherMap API credentials:

env
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather?
VITE_API_KEY=your_openweathermap_api_key

🌐 Deployment

This project is deployed on Vercel: 🔗 https://weather-prediction-app-psi.vercel.app/
