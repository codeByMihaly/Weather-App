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

export default renderHours;
