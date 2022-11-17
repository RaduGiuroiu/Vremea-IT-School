const APPID = "0da621940d40c8920d9b078934523522";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=RO&appid=${APPID}`;
}
