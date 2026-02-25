const headerRender = () => {
  const container = document.getElementById("container");

  const headerDiv = document.createElement("div");
  headerDiv.id = "header-div";

  const header = document.createElement("h1");
  header.id = "header-id";
  header.textContent = "Weather app!";

  const searchedCity = document.createElement("h2");
  searchedCity.id = "searched-city-id";
  searchedCity.textContent = "";

  headerDiv.append(header, searchedCity);
  container.append(headerDiv);
};

export const updateSearchedCity = (city) => {
  const searchedCity = document.getElementById("searched-city-id");

  if (!city) {
    searchedCity.textContent = "";
    return;
  }

  searchedCity.textContent = `Searched city: ${city}`;
};

export default headerRender;
