import cloudy from "./weatherIcons/cloudyIcon.png";
import rainy from "./weatherIcons/rainyIcon.png";
import partiallyCloudy from "./weatherIcons/partiallyCloudyIcon.png";
import snow from "./weatherIcons/snowyIcon.png";
import storm from "./weatherIcons/stormIcon.png";
import sunny from "./weatherIcons/sunnyIcon.png";
import wind from "./weatherIcons/windIcon.png";

const renderDays = (data, currentUnit = "metric") => {
  const days = document.createElement("div");
  days.classList.add("days");

  data.days.slice(0, 15).forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day-div");

    const tempUnit = currentUnit === "metric" ? "°C" : "°F";

    dayDiv.innerHTML = `
      <div id="day-date">${day.datetime}</div>
      <div id="day-tempmin">Min: <strong>${day.tempmin}${tempUnit}</strong></div>
      <div id="day-tempmax">Max: <strong>${day.tempmax}${tempUnit}</strong></div>
      <div>Precipitation Probability: <strong>${day.precipprob}%</strong></div>
    `;

    const img = document.createElement("img");
    img.id = "icon-image";

    const icon = dayDiv.querySelector("#icon-image");
    if (icon) {
      icon.remove();
    }

    const dayIcon = day.conditions.toLowerCase();

    if (dayIcon.includes("wind")) {
      img.src = wind;
    } else if (dayIcon.includes("rain")) {
      img.src = rainy;
    } else if (dayIcon.includes("clear")) {
      img.src = sunny;
    } else if (dayIcon.includes("snow")) {
      img.src = snow;
    } else if (dayIcon.includes("thunderstorm")) {
      img.src = storm;
    } else if (dayIcon.includes("partially cloudy")) {
      img.src = partiallyCloudy;
    } else if (dayIcon.includes("cloudy")) {
      img.src = cloudy;
    } else {
      img.src = cloudy;
    }

    dayDiv.appendChild(img);
    days.appendChild(dayDiv);
  });

  return days;
};

export default renderDays;
