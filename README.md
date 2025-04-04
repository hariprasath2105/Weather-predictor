# 🌦️ Weather Predictor App with Firebase Authentication

A simple and user-friendly weather forecasting web app that allows users to log in or register securely using Firebase Authentication. 
After successful login, users can search for the current weather of any city using the OpenWeatherMap API.

---

## 🔐 Features

- ✅ **User Registration & Login** with Firebase Authentication
- 🌍 **City-based Weather Forecast** using OpenWeatherMap API
- 📅 **Date Selection** to show user's chosen date (for reference)
- 🚪 **Secure Logout** functionality
- 🎨 **Responsive UI** with modern styling using CSS

---

## 📂 Project Structure

```bash
weather-app/
│
├── index.html        # Login / Register page
├── weather.html      # Weather app interface after login
├── reg.js            # Firebase Auth (Register/Login logic)
├── logout.js         # Firebase Logout script
├── weather.js        # Weather API logic
└── style.css         # All CSS styling
