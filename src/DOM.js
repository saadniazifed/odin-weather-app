import { getWeatherData, getWeatherValues } from "./promises";

//Selecting DOM Elements.
const getLocationBtn = document.querySelector(".getLocationBtn");

const start = async () => {
  getLocationBtn.addEventListener("click", async () => {
    addingToDOM();
  });
};

const addingToDOM = () => {
  condition();
  cityLocation();
  cityTemperature();
  feelsLike();
  humidity();
  tempMax();
};

const condition = async () => {
  const condition = document.querySelector(".condition");
  const weatherData = await getWeatherData();
  const weatherValues = getWeatherValues(weatherData);

  condition.innerText = weatherValues.description.toUpperCase();
};

const cityLocation = async () => {
  const weatherData = await getWeatherData();
  const weatherValues = getWeatherValues(weatherData);
  const location = document.querySelector(".location");

  location.innerText = `${weatherValues.name}, ${weatherValues.country}`;
};

const cityTemperature = async () => {
  const degrees = document.querySelector(".degrees");
  const weatherData = await getWeatherData();
  const weatherValues = getWeatherValues(weatherData);
  const decimalRemove = Math.trunc(weatherValues.temp);
  degrees.innerText = `${decimalRemove}℃`;
};

const feelsLike = async () => {
  const cityFeelsLike = document.querySelector(".feelsLike");
  const weatherData = await getWeatherData();
  const weatherValues = getWeatherValues(weatherData);
  const decimalRemove = Math.trunc(weatherValues.feelsLike);

  cityFeelsLike.innerText = `FEELS LIKE: ${decimalRemove}℃`;
};

const humidity = async () => {
  const weatherData = await getWeatherData();
  const weatherValues = getWeatherValues(weatherData);
  const humidityLevels = document.querySelector(".humidity");

  humidityLevels.innerText = `HUMIDITY: ${weatherValues.humidity}%`;
};

const tempMax = async () => {
  const weatherData = await getWeatherData();
  const weatherValues = getWeatherValues(weatherData);
  const maxTemp = document.querySelector(".tempMax");
  const decimalRemove = Math.trunc(weatherValues.maxTemp);

  maxTemp.innerText = `MAX TEMPERATURE: ${decimalRemove}℃`;
};

export { start };
