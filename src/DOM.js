import { getWeatherData, dataObject } from "./promises";

//Selecting DOM Elements.
const getLocationBtn = document.querySelector(".getLocationBtn");
const mainWeatherDisplay = document.querySelector(".main-weather-display");
const generalInfo = document.querySelector(".generalInfo");
const condition = document.querySelector(".condition");
const location = document.querySelector(".location");
const degrees = document.querySelector(".degrees");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");

const start = () => {
  console.log(dataObject.dataObj.name);
  getLocationBtn.addEventListener("click", () => {
    mainWeatherDisplay.innerHtml = "";
    generalInfo.innerHTML = "";
    getWeatherData();
  });
};

export { start };
