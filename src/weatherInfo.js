const renderWeatherInfo = () => {
  const container = document.getElementById("container");

  const form = document.createElement("form");

  const formInput = document.createElement("input");
  formInput.id = "form-input-id";
  formInput.placeholder = "Type a place";
  formInput.value = "Budapest";
  const formBtn = document.createElement("button");
  formBtn.id = "form-button-id";
  formBtn.textContent = "Search";

  const render = document.createElement("div");
  render.id = "render";

  const fields = {
    datetime: "Date",
    conditions: "Condition",
    temp: "Temperature",
    tempmin: "Min temperature",
    tempmax: "Max temperature",
    cloudcover: "Cloud cover",
    dew: "Dew",
    feelslike: "Feels like",
    description: "Description",
    humidity: "Humidity",
    windspeed: "Windspeed",
    address: "Address",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderWeather();
  });

  const errorMsg = document.createElement("div");
  container.appendChild(errorMsg);
};

export default renderWeatherInfo;
