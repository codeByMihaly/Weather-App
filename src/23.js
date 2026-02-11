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
