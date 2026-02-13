import "./styles.css";
import headerRender from "./header.js";
import footerRender from "./footer.js";
import {
  renderWeatherInfo,
  renderBackgroundImg,
} from "./weather/weatherInfo.js";

headerRender();
renderWeatherInfo();
footerRender();
renderBackgroundImg();
