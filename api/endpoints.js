//API Key-urile NU ar trebui sa fie stocate in format text, nu este sigur.
//
const APPID = "0da621940d40c8920d9b078934523522";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=RO&appid=${APPID}`;
}

function getForcastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=RO&appid=${APPID}`;
}
