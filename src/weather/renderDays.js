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

export default renderDays;
