import { getWeatherData } from "./promises";

//Selecting DOM Elements.
const getLocationBtn = document.querySelector(".getLocationBtn");
const mainWeatherDisplay = document.querySelector(".main-weather-display");
const generalInfo = document.querySelector(".generalInfo");

const start = () => {
  getLocationBtn.addEventListener("click", () => {
    mainWeatherDisplay.innerHtml = "";
    generalInfo.innerHTML = "";
    getWeatherData();
  });
};

export { start };
