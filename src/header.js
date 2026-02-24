const headerRender = () => {
  const container = document.getElementById("container");

  const header = document.createElement("h1");
  header.id = "header-id";
  header.textContent = "Weather app!";

  const formInput = document.querySelector("#form-input-id");

  const searchedCity = document.createElement("h2");
  searchedCity.id = "searched-city-id";
  searchedCity.textContent = `Searched city: ${formInput ? formInput.value : ""}`;

  container.append(header, searchedCity);
};

export default headerRender;
