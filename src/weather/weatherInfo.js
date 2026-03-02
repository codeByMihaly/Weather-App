// All rendered info-s are here

import weather from "./fetchWeather.js";
import renderWeather from "./renderWeather.js";
import { updateSearchedCity } from "../header.js";

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

// Every paragraph and button before and after render

export const renderWeatherInfo = () => {
  const container = document.getElementById("container");

  const loadingScreen = document.createElement("div");
  loadingScreen.id = "loading-screen";
  loadingScreen.textContent = "Fetching weather data...";
  loadingScreen.style.display = "none";

  const form = document.createElement("form");
  const label = document.createElement("label");
  label.textContent = "Search for a city";

  const formInput = document.createElement("input");
  formInput.id = "form-input-id";
  formInput.placeholder = "Enter city name";

  const btn = document.createElement("button");
  btn.id = "search-button";
  btn.textContent = "Search";

  const changeMetric = document.createElement("button");
  changeMetric.id = "change-metric-id";
  changeMetric.type = "button";
  changeMetric.textContent = "Switch to °F";
  changeMetric.style.display = "none";

  const render = document.createElement("div");
  render.id = "render";

  const errorMsg = document.createElement("div");
  errorMsg.id = "error-msg";

  form.append(label, formInput, btn, changeMetric);
  container.append(form, errorMsg, render, loadingScreen);

  // Metric by default

  let currentUnit = "metric";
  let lastSearchedLocation = null;

  const refreshUI = (data) => {
    render.innerHTML = "";
    renderWeather(data, render, currentUnit);
  };

  //Add event listener for the submit button

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const location = formInput.value.trim();

    render.innerHTML = "";
    errorMsg.textContent = "";
    renderBackgroundImg(null);
    updateSearchedCity("");
    loadingScreen.style.display = "block";
    changeMetric.style.display = "none";

    // If the input filed is empty

    if (!location) {
      errorMsg.textContent = "Please enter a city.";
      loadingScreen.style.display = "none";
      return;
    }

    const data = await weather(location, currentUnit);

    // If the input filed is not exist

    if (!data || data.error) {
      errorMsg.textContent = "City not found.";
      loadingScreen.style.display = "none";
      return;
    }

    lastSearchedLocation = data.address;
    errorMsg.textContent = "";

    const backgroundImg = renderBackgroundImg(
      data.currentConditions.conditions,
    );

    // Intentional made some delay but in the background the data is working.

    setTimeout(() => {
      loadingScreen.style.display = "none";
      refreshUI(data);
      updateSearchedCity(data.address.toUpperCase());
      backgroundImg.style.display = "block";
      changeMetric.style.display = "block";
    }, 1000);
  });

  // Metric button. here you can change it.

  changeMetric.addEventListener("click", async () => {
    if (!lastSearchedLocation) return;

    currentUnit = currentUnit === "metric" ? "us" : "metric";

    changeMetric.textContent =
      currentUnit === "metric" ? "Switch to °F" : "Switch to °C";

    const data = await weather(lastSearchedLocation, currentUnit);

    if (!data || data.error) return;

    setTimeout(() => {
      refreshUI(data);
      updateSearchedCity(data.address.toUpperCase());
    }, 1000);
  });
};

// Background images. here you can change them.

export const renderBackgroundImg = (conditions) => {
  const container = document.getElementById("container");
  const render = document.getElementById("render");

  const oldImg = container.querySelector("#background-image");
  if (oldImg) oldImg.remove();

  if (!conditions) {
    render.style.color = "";
    return;
  }

  const img = document.createElement("img");
  img.id = "background-image";
  img.style.display = "none";

  const condition = conditions.toLowerCase();

  render.style.color = "";

  if (condition.includes("rain")) {
    img.src = rain;
    render.style.color = "#00ffdd";
  } else if (condition.includes("clear")) img.src = clear;
  else if (condition.includes("thunderstorm")) img.src = thunderstorm;
  else if (condition.includes("fog")) img.src = fog;
  else if (condition.includes("snow")) {
    img.src = snow;
    render.style.color = "#a39a6f";
  } else if (condition.includes("sand")) img.src = sand;
  else if (condition.includes("partially cloudy")) img.src = partiallyCloudy;
  else if (condition.includes("tornado")) img.src = tornado;
  else if (condition.includes("wind")) img.src = wind;
  else if (condition.includes("cloudy")) img.src = cloudy;
  else if (condition.includes("overcast")) img.src = overcast;
  else img.src = partiallyCloudy;

  container.appendChild(img);

  return img;
};
