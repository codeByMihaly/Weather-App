const footerRender = () => {
  const container = document.getElementById("container");

  const footer = document.createElement("h4");
  footer.id = "footer-id";
  footer.textContent = "CodeByMihaly";

  container.appendChild(footer);
};

export default footerRender;
