const getLocationBtn = document.querySelector(".getLocationBtn");

async function getWeatherData() {
  //Use the try and catch method inside the async function.

  try {
    const getLocation = document.querySelector("#location").value;

    //Fetch the weather of London from the API. Use await.
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${getLocation}&APPID=c37741fb2b2886b1cd8210bf805f8c57`,
      { mode: "cors" }
    );

    //Pass the json data using JSON method in a variable.
    const data = await response.json();

    //Creating an object which is giving me the values related to Weather
    const dataObj = {
      name: data.name,
      description: data.weather[0].description,
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
    };
    console.log(dataObj);

    //If there's an error, console log it.
  } catch (err) {
    console.log(err);
  }
}

getLocationBtn.addEventListener("click", getWeatherData);
