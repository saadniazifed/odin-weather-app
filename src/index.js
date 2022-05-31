async function getWeatherData() {
  //Use the try and catch method inside the async function.
  try {
    //Fetch the weather of London from the API. Use await.
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Islamabad&APPID=c37741fb2b2886b1cd8210bf805f8c57",
      { mode: "cors" }
    );
    //Pass the json data using JSON method in a variable.
    const data = await response.json();
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

getWeatherData();
