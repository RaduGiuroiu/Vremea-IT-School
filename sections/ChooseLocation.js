const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const arad = document.querySelector(".arad");
const sibiu = document.querySelector(".sibiu");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city + ".";
}

function updateCity(city) {
  //updatam orasul afisat
  updateCityDisplay(city);

  localStorage.setItem("city", city);

  //afisam noile date pentru vremes curenta de la API
  displayCurrentWeather(city);

  //afisam noile date pentru prognoza pe 5 zile
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  updateCity("București");
});

timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});

oradea.addEventListener("click", function () {
  updateCity("Oradea");
});

arad.addEventListener("click", function () {
  updateCity("Arad");
});

sibiu.addEventListener("click", function () {
  updateCity("Sibiu");
});
