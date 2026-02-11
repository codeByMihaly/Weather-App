const headerRender = () => {
  const container = document.getElementById("container");

  const header = document.createElement("h1");
  header.id = "header-id";
  header.textContent = "Weather app!";
  container.appendChild(header);
};

export default headerRender;
