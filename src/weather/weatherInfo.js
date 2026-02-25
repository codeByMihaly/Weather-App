import weather from "./fetchWeather.js";
import renderWeather from "./renderWeather.js";
import { updateSearchedCity } from "../header.js";
import renderDays from "./renderDays.js";
import renderHours from "./renderHours.js";

import clear from "./backgroundImages/clear.jpg";
import cloudy from "./backgroundImages/cloudy.jpg";
import fog from "./backgroundImages/fog.jpg";
import overcast from "./backgroundImages/overcast.jpg";
import rain from "./backgroundImages/rain.jpg";
import sand from "./backgroundImages/sand.jpg";
import snow from "./backgroundImages/snow.jpg";
import thunderstorm from "./backgroundImages/thunderstorm.jpg";
import tornado from "./backgroundImages/tornado.jpg";
import wind from "./backgroundImages/wind.jpg";
import partiallyCloudy from "./backgroundImages/partiallyCloudy.jpg";

export const renderWeatherInfo = () => {
  const container = document.getElementById("container");

  const form = document.createElement("form");
  const label = document.createElement("label");
  label.textContent = "Search for a city!";

  const formInput = document.createElement("input");
  formInput.id = "form-input-id";
  formInput.placeholder = "Type a place";
  formInput.value = "Budapest";

  const btn = document.createElement("button");
  btn.id = "search-button";
  btn.textContent = "Search";

  const changeMetric = document.createElement("button");
  changeMetric.id = "change-metric-id";
  changeMetric.type = "button";
  changeMetric.textContent = "Switch to °F";

  const render = document.createElement("div");
  render.id = "render";

  const errorMsg = document.createElement("div");
  errorMsg.id = "error-msg";

  form.append(label, formInput, btn, changeMetric);
  container.append(form, errorMsg, render);

  let currentUnit = "metric";
  let lastSearchedLocation = null;

  const refreshUI = (data) => {
    render.innerHTML = "";
    renderWeather(data, render, currentUnit);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const location = formInput.value.trim();

    if (!location) {
      errorMsg.textContent = "Must search for a city!";
      render.innerHTML = "";
      renderBackgroundImg(null);
      updateSearchedCity(null);
      lastSearchedLocation = null;
      return;
    }

    const data = await weather(location, currentUnit);

    if (!data || data.error) {
      errorMsg.textContent = "Sorry! Not a valid place!";
      render.innerHTML = "";
      renderBackgroundImg(null);
      updateSearchedCity(null);
      lastSearchedLocation = null;
      return;
    }

    lastSearchedLocation = location;
    errorMsg.textContent = "";

    refreshUI(data);
    updateSearchedCity(data.address.toUpperCase());
    renderBackgroundImg(data.currentConditions.conditions);
  });

  changeMetric.addEventListener("click", async () => {
    if (!lastSearchedLocation) return;

    currentUnit = currentUnit === "metric" ? "us" : "metric";

    changeMetric.textContent =
      currentUnit === "metric" ? "Switch to °F" : "Switch to °C";

    const data = await weather(lastSearchedLocation, currentUnit);

    if (!data || data.error) return;

    refreshUI(data);
    updateSearchedCity(data.address.toUpperCase());
  });
};

export const renderBackgroundImg = (conditions) => {
  const container = document.getElementById("container");

  const oldImg = container.querySelector("#background-image");
  if (oldImg) oldImg.remove();

  if (!conditions) return;

  const img = document.createElement("img");
  img.id = "background-image";

  const condition = conditions.toLowerCase();

  if (condition.includes("rain")) img.src = rain;
  else if (condition.includes("clear")) img.src = clear;
  else if (condition.includes("thunderstorm")) img.src = thunderstorm;
  else if (condition.includes("fog")) img.src = fog;
  else if (condition.includes("snow")) img.src = snow;
  else if (condition.includes("sand")) img.src = sand;
  else if (condition.includes("partially cloudy")) img.src = partiallyCloudy;
  else if (condition.includes("tornado")) img.src = tornado;
  else if (condition.includes("wind")) img.src = wind;
  else if (condition.includes("cloudy")) img.src = cloudy;
  else if (condition.includes("overcast")) img.src = overcast;
  else img.src = partiallyCloudy;

  container.appendChild(img);
};
