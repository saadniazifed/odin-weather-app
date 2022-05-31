async function getWeatherData(resolve, reject) {
  //Use the try and catch method.
  try {
    const getWeather = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c37741fb2b2886b1cd8210bf805f8c57",
      { mode: "cors" }
    );
    const response = await getWeather.json();
    return response;
  } catch {}
  //In the try method, Get the weather from the API using await.
  //Pass the json data using JSON method in a variable.
  //While, in the catch method, catch the error if a place doesn't exist.
}

//Apply the then() method to the getWeatherData function.
