import cloudy from "./weatherIcons/cloudyIcon.png";
import rainy from "./weatherIcons/rainyIcon.png";
import partiallyCloudy from "./weatherIcons/partiallyCloudyIcon.png";
import snow from "./weatherIcons/snowyIcon.png";
import storm from "./weatherIcons/stormIcon.png";
import sunny from "./weatherIcons/sunnyIcon.png";
import wind from "./weatherIcons/windIcon.png";

const renderHours = (data, currentUnit = "metric") => {
  const hours = document.createElement("div");
  hours.classList.add("hours");

  const tempUnit = currentUnit === "metric" ? "°C" : "°F";

  data.days[0].hours.forEach((hour) => {
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hour-div");

    hourDiv.innerHTML = `
      <div id="hour-time">Hour: ${hour.datetime}</div>
      <div id="hour-temp">Temp: ${hour.temp}${tempUnit}</div>
      <div>Precipitation Probability: ${hour.precipprob}%</div>
    `;

    const img = document.createElement("img");
    img.id = "icon-image";

    const icon = hourDiv.querySelector("#icon-image");
    if (icon) {
      icon.remove();
    }

    const dayIcon = hour.conditions.toLowerCase();

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

    hourDiv.appendChild(img);
    hours.appendChild(hourDiv);
  });

  return hours;
};

export default renderHours;
