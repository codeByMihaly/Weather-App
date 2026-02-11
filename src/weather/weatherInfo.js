import fetchWeather from "./fetchWeather.js";
import renderWeather from "./renderWeather.js";

const renderWeatherInfo = () => {
  const container = document.getElementById("container");

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.id = "form-input-id";
  input.placeholder = "Type a place";
  input.value = "Budapest";

  const btn = document.createElement("button");
  btn.textContent = "Search";

  const render = document.createElement("div");
  render.id = "render";

  const errorMsg = document.createElement("div");
  errorMsg.id = "error-msg";

  form.appendChild(input);
  form.appendChild(btn);

  container.appendChild(form);
  container.appendChild(errorMsg);
  container.appendChild(render);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const location = input.value.trim();
    if (!location) {
      errorMsg.textContent = "Must search for a city!";
      render.innerHTML = "";
      return;
    }

    const data = await fetchWeather(location);

    if (!data || data.error) {
      errorMsg.textContent = "Sorry! Not a valid place!";
      render.innerHTML = "";
      return;
    }

    errorMsg.textContent = "";
    renderWeather(data, render);
  });
};

export default renderWeatherInfo;
