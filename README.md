# Weather Dashboard

A clean, responsive weather dashboard built with HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API. Users can search for any city and see current conditions including temperature, weather description, humidity, and wind speed.

## Overview

This web application provides a simple interface for looking up current weather conditions by city name. It connects to the OpenWeatherMap API to retrieve live weather data and dynamically updates the page with the results. The UI is styled with a modern, card-based layout.

## Purpose

Developed as a personal project to practice working with third-party REST APIs, asynchronous JavaScript (fetch/promises), and building responsive web interfaces with clean CSS styling.

## Technologies Used

- **HTML5** - Page structure and semantic layout
- **CSS3** - Responsive styling with flexbox, card-based design, and hover effects
- **JavaScript (ES6)** - API calls using Fetch API, DOM manipulation
- **OpenWeatherMap API** - Real-time weather data provider

## Features

- **City search** - Look up weather for any city worldwide with Enter key support
- **Current temperature** - Displays temperature in Celsius with weather icon
- **Weather description** - Shows current weather conditions (e.g., clear sky, light rain)
- **Additional details** - Humidity and wind speed display with visual separator
- **Error handling** - User-friendly error messages for invalid cities or API issues
- **Loading states** - Visual feedback while fetching data
- **Clean UI** - Card-based layout with modern color scheme, rounded corners, and focus states
- **Input validation** - Empty search prevention and URL encoding for special characters

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/rmayen/weather-dashboard.git
   cd weather-dashboard/weather
   ```
2. Open `index.html` in any modern web browser.
3. **API Key Setup**: Open `script.js` and replace `'YOUR_API_KEY'` with your own API key from [OpenWeatherMap](https://openweathermap.org/api) (free tier available).
4. Search for any city to see current weather data.

## Project Structure

```
weather-dashboard/
└── weather/
    ├── index.html    # Main page with search box and weather display
    ├── script.js     # API calls and DOM updates
    └── style.css     # Responsive styling and layout
```

## Screenshot

The dashboard features a centered card layout with a search bar at the top, current weather display in the middle, and a forecast section at the bottom. The design uses a light blue background with a white card container and blue accent buttons.

## My Role

I designed and built this entire application as a personal project. I created the responsive UI layout, implemented the API integration with fetch and promises, and handled the dynamic DOM updates to display weather data.

## Lessons Learned

- Learned to work with RESTful APIs and handle asynchronous data with JavaScript promises
- Practiced responsive web design using CSS flexbox
- Gained experience with DOM manipulation for dynamic content updates
- Understood how to manage API keys and external service integration
