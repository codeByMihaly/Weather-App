const container = document.getElementById("container");

const header = document.createElement("h1");
header.id = "header-id";
header.textContent = "Weather app!";
container.appendChild(header);

const form = document.createElement("form");

const formInput = document.createElement("input");
formInput.id = "form-input-id";
formInput.placeholder = "Type a place";
formInput.value = "Budapest";
const formBtn = document.createElement("button");
formBtn.id = "form-button-id";
formBtn.textContent = "Search";

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

const weather = async function fetchWeather() {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formInput.value}?key=FXXNUQBR8DRNNEDKXEQV8YWNJ`,
    );
    const response = await data.json();
    console.log(response);
    return response;
  } catch (e) {
    console.log(`Csicska hiba: ${e}`);
    return null;
  }
};

const renderHours = (data) => {
  const hours = document.createElement("div");
  hours.classList.add("hours");

  data.days[0].hours.forEach((hour) => {
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hour-div");

    hourDiv.innerHTML = `
      <div id="hour-time">${hour.datetime}</div>
      <div id="hour-temp">${hour.temp}</div>
      <div id="hour-cond">${hour.conditions}</div>
    `;

    hours.appendChild(hourDiv);
  });

  return hours;
};

const renderDays = (data) => {
  const days = document.createElement("div");
  days.classList.add("days");

  data.days.slice(0, 15).forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day-div");

    dayDiv.innerHTML = `
      <div id="day-date">${day.datetime}</div>
      <div id="day-tempmin">Min: ${day.tempmin}</div>
      <div id="day-tempmax">Max: ${day.tempmax}</div>
      <div id="day-cond">${day.conditions}</div>
    `;

    days.appendChild(dayDiv);
  });

  return days;
};

const renderWeatherData = (data) => {
  render.innerHTML = "";

  for (const key in fields) {
    const div = document.createElement("div");
    div.classList.add("weather-field", `weather-${key}`);
    const label = fields[key];

    let value;

    if (key === "description" || key === "address") {
      value = data[key];
    } else if (key === "tempmax" || key === "tempmin") {
      value = data.days[0][key];
    } else {
      value = data.currentConditions[key];
    }

    div.textContent = `${label}: ${value}`;
    render.appendChild(div);
  }

  const hourly = renderHours(data);
  render.appendChild(hourly);

  const daily = renderDays(data);
  render.appendChild(daily);
};

const renderWeather = async () => {
  const location = formInput.value.trim();

  if (!location) {
    errorMsg.textContent = "Must search for a city!";
    render.textContent = "";
    return;
  }

  const updatedWeather = await weather();

  if (!updatedWeather || updatedWeather.error) {
    errorMsg.textContent = "Sorry! Not a valid place!";
    render.textContent = "";
    return;
  }

  errorMsg.textContent = "";
  renderWeatherData(updatedWeather);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  renderWeather();
});

form.append(formInput, formBtn);
container.appendChild(form);

const render = document.createElement("div");
render.id = "render";

const renderDate = document.createElement("div");
const renderCondition = document.createElement("div");
const renderTemp = document.createElement("div");
const renderCloud = document.createElement("div");
const renderDew = document.createElement("div");
const renderFeels = document.createElement("div");
const renderDescription = document.createElement("div");
const renderHumidity = document.createElement("div");
const renderWindSpeed = document.createElement("div");
const renderAddress = document.createElement("div");

container.appendChild(render);
render.append(
  renderDate,
  renderCondition,
  renderTemp,
  renderCloud,
  renderDew,
  renderFeels,
  renderDescription,
  renderHumidity,
  renderWindSpeed,
  renderAddress,
);

const errorMsg = document.createElement("div");
container.appendChild(errorMsg);

const footer = document.createElement("h4");
footer.id = "footer-id";
footer.textContent = "CodeByMihaly";
container.appendChild(footer);
