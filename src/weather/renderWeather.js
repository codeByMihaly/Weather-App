import renderHours from "./renderHours.js";
import renderDays from "./renderDays.js";
import WeatherFields from "./renderWeatherFields.js";

const renderWeather = (data, render) => {
  render.innerHTML = "";

  for (const key in WeatherFields) {
    const div = document.createElement("div");
    div.classList.add("weather-field");

    let value;

    if (key === "description" || key === "address") {
      value = data[key];
    } else if (key === "tempmax" || key === "tempmin") {
      value = data.days[0][key];
    } else {
      value = data.currentConditions[key];
    }

    div.textContent = ` ${WeatherFields[key]}: ${value}`;
    render.appendChild(div);
  }

  render.appendChild(renderHours(data));
  render.appendChild(renderDays(data));
};

export default renderWeather;
