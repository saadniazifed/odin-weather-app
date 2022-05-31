import "./style.css";

const getLocationBtn = document.querySelector(".getLocationBtn");

async function getWeatherData() {
  //Use the try and catch method inside the async function.

  try {
    const getLocation = document.querySelector("#location").value;

    //Fetch the weather of London from the API. Use await.
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${getLocation}&units=metric&APPID=c37741fb2b2886b1cd8210bf805f8c57`,
      { mode: "cors" }
    );

    //Pass the json data using JSON method in a variable.
    const data = await response.json();
    dataObject(data);

    //If there's an error, console log it.
  } catch (err) {
    console.log(err);
  }
}

const dataObject = (data) => {
  const dataObj = {
    name: data.name,
    country: data.sys.country,
    description: data.weather[0].description,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
  };
  console.log(dataObj);
};

getLocationBtn.addEventListener("click", getWeatherData);
