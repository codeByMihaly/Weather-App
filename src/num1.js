import renderWeatherInfo from "./weatherInfo.js";

const weather = async function fetchWeather() {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formInput.value}?key=FXXNUQBR8DRNNEDKXEQV8YWNJ`,
    );
    const response = await data.json();
    console.log(response);
    return response;
  } catch (e) {
    console.log(`Error: ${e}`);
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
