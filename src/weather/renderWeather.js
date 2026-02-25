import renderHours from "./renderHours.js";
import renderDays from "./renderDays.js";
import WeatherFields from "./weatherFields.js";

const renderWeather = (data, render, currentUnit = "metric") => {
  render.innerHTML = "";

  const weatherWrapper = document.createElement("div");
  weatherWrapper.classList.add("weatherWrapper-field");

  const tempUnit = currentUnit === "metric" ? "°C" : "°F";
  const speedUnit = currentUnit === "metric" ? "km/h" : "mph";
  const precipUnit = currentUnit === "metric" ? "mm" : "in";

  for (const key in WeatherFields) {
    const div = document.createElement("div");
    div.classList.add("weather-field");

    let value;

    if (key === "description" || key === "address") {
      value = data[key] || data.currentConditions[key];
    } else if (key === "tempmax" || key === "tempmin") {
      value = `${data.days[0][key]}${tempUnit}`;
    } else if (key === "temp" || key === "feelslike") {
      value = `${data.currentConditions[key]}${tempUnit}`;
    } else if (key === "windspeed") {
      value = `${data.currentConditions[key]} ${speedUnit}`;
    } else if (key === "precipprob") {
      value = `${data.currentConditions[key]}%`;
    } else if (key === "precip") {
      value = `${data.currentConditions[key]} ${precipUnit}`;
    } else if (key === "cloudcover") {
      value = `${data.currentConditions[key]}%`;
    } else if (key === "humidity") {
      value = `${data.currentConditions[key]}%`;
    } else {
      value = data.currentConditions[key];
    }
    div.textContent = ` ${WeatherFields[key]}: ${value}`;

    weatherWrapper.appendChild(div);
  }

  const divSpaceUpper = document.createElement("div");
  divSpaceUpper.classList.add("div-space");
  divSpaceUpper.id = "div-space-upper";
  divSpaceUpper.textContent = "Today's weather";

  const divSpaceBottom = document.createElement("div");
  divSpaceBottom.classList.add("div-space");
  divSpaceBottom.id = "div-space-bottom";

  const divHoursPara = document.createElement("p");
  divHoursPara.id = "div-hours-para";
  divHoursPara.textContent = "In hours";

  const divDaysPara = document.createElement("p");
  divDaysPara.id = "div-days-para";
  divDaysPara.textContent = "Upcoming days";

  divSpaceBottom.append(divHoursPara, divDaysPara);
  render.appendChild(divSpaceUpper);
  render.appendChild(weatherWrapper);
  render.appendChild(divSpaceBottom);
  render.appendChild(renderHours(data, currentUnit));
  render.appendChild(renderDays(data, currentUnit));
};

export default renderWeather;
