# Weather App

## Live Demo: https://codebymihaly.github.io/Weather-App/

A modern, fully responsive weather application built with asynchronous JavaScript, modular ES6 architecture, and the Visual Crossing Weather API.  
The app provides:

- Current weather data
- 24 hour hourly forecast
- 15 day daily forecast
- Dynamic weather icons and background images
- Metric / Imperial unit switching
- Smooth, responsive layout for desktop, tablet, and mobile

All data fetching is handled through async/await, ensuring clean, readable, and non blocking code execution.

# Features

Current Weather (Async Loaded)
Fetched asynchronously from the Visual Crossing API, including: - Temperature and feels like temperature  
 - Wind speed  
 - Humidity  
 - Cloud cover  
 - Precipitation  
 - Weather description  
 - Location name

# Hourly Forecast (24 hours)

- Temperature
- Precipitation probability
- Weather condition icons
- Responsive grid layout (6 columns → 3 → 1 depending on screen size)

# 15 Day Forecast

- Daily min/max temperature
- Precipitation probability
- Weather icons
- Responsive grid layout (5 columns → 3 → 1)

# Dynamic Backgrounds
The background image changes based on the current weather condition:

- Clear
- Cloudy
- Rain
- Snow
- Fog
- Thunderstorm
- Wind
- Sand/dust
- Partially cloudy

# Unit Switching (Async Refresh)
Switch between:

- °C ↔ °F
- km/h ↔ mph
- mm ↔ inch

Switching units triggers a new asynchronous API call and re-renders the entire UI.

# Technologies Used

- JavaScript (ES6 Modules)
- Async/Await for API calls
- HTML5
- CSS3 (Grid + Flexbox)
- Visual Crossing Weather API
- Modular rendering system (separate modules for hours, days, weather fields)

# Photos By:
Clear - Photo by <a href="https://unsplash.com/de/@yurijean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dorothy Ere</a> auf <a href="https://unsplash.com/de/fotos/ein-flugzeug-das-einen-kondensstreifen-uber-einen-klaren-blauen-himmel-hinterlasst-OZmWXcaRw1Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Partially cloudy - Photo by <a href="https://unsplash.com/de/@abaid007?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Abaidullah bhatti</a> auf <a href="https://unsplash.com/de/fotos/ein-flugzeug-das-durch-einen-wolkenverhangenen-blauen-himmel-fliegt-cNApBGj64gI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Cloudy - Photo by <a href="https://unsplash.com/@iklas_rahman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Iklas</a> on <a href="https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-beach-under-a-cloudy-sky-07yRU_lKMWA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Overcast - Photo by <a href="https://unsplash.com/@henry_be?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">enrico bet</a> on <a href="https://unsplash.com/photos/pine-trees-on-mountain-slope-under-dark-clouds-Ind8HYFTOos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Rain - Photo by <a href="https://unsplash.com/@sparxastronomy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bipradeep Saha</a> on <a href="https://unsplash.com/photos/a-window-covered-in-water-p-Hj37KYfwM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Snow - Photo by <a href="https://unsplash.com/@vmxhu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Szabo Viktor</a> on <a href="https://unsplash.com/photos/snow-covered-green-leafed-plant-in-selective-focus-photography-BoHqVNndGC0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Thunderstorm - Photo by <a href="https://unsplash.com/@gleblucky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gleb Lucky</a> on <a href="https://unsplash.com/photos/lightning-strike-on-black-clouds-fSSzBTvlbfg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Fog - Photo by <a href="https://unsplash.com/@silvana54?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">silvana amicone</a> on <a href="https://unsplash.com/photos/green-trees-with-fog-aCHBgtcE7D8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Sand - Photo by <a href="https://unsplash.com/@hdjislk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Straub</a> on <a href="https://unsplash.com/photos/brown-sands-n5HOJGtYt4Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Wind - Photo by <a href="https://unsplash.com/@mahkeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Khamkéo</a> on <a href="https://unsplash.com/photos/trees-with-wind-photo-WtwSsqwYlA0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Tornado - Photo by <a href="https://unsplash.com/@nikolasnoonan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikolas Noonan</a> on <a href="https://unsplash.com/photos/storm-near-leafed-plants-fQM8cbGY6iQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

# Screenshots:

<img width="2504" height="1347" alt="Screenshot_2026-03-02_22-26-42" src="https://github.com/user-attachments/assets/aedc3f1b-a6ab-467d-9f6a-105c363a14db" />
<img width="655" height="1196" alt="Screenshot_2026-03-02_22-27-58" src="https://github.com/user-attachments/assets/c31b6a7f-cdf0-4fbe-810e-baaf60170891" />

