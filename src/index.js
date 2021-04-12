function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}

let minutes = date.getMinutes();

if (minutes < 10) {
    minutes = `0${minutes}`;
}

let days = [

"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"

];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;

}

function showForecast(response) {

console.log(response.data.daily);

let forecastElement = document.querySelector("#forecast");

let forecastHtml = `<div class="row">`;

let days = ["Tue", "Wed", "Thu", "Fry", "Sat", "Sun"];

days.forEach (function(day) {

forecastHtml = forecastHtml + `<div class="col-2">
<span class="forecast-date">${day}</span>
<img src="http://openweathermap.org/img/wn/04d@2x.png" alt="weather-icon">
<div class="forecast-temp"><span class="forecast-max-temp">18º</span> <span class="forecast-min-temp">12º</span></div>

 </div>`;});

forecastHtml = forecastHtml + `</div>`;
forecastElement.innerHTML = forecastHtml;

}


function getForecast (coordinates){
  let apiKey = `add14ae795612e68aab6557cae6f369f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);  


}


function showTemperature (response){

let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#weather-description");
let degreesElement = document.querySelector("#degrees");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsiusTemperature = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
degreesElement.innerHTML = Math.round(response.data.main.temp);
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);

getForecast(response.data.coord);


}



function search(city) {
        let apiKey = "add14ae795612e68aab6557cae6f369f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);  
  }
  


  function showCelsius(event){
    event.preventDefault();
    let degreesElement = document.querySelector("#degrees");
    degreesElement.innerHTML = Math.round(celsiusTemperature);
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    
}



function showFahrenheit(event){
    event.preventDefault();
    let degreesElement = document.querySelector("#degrees");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    degreesElement.innerHTML = Math.round(fahrenheitTemperature);
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
}


  
function hadleSubmit (event) {
    event.preventDefault();

    let searchCity = document.querySelector("#city-value");

    if (searchCity.value) {
        search(searchCity.value);
      } else {
        alert(`Please, type a city name.`);
      }

}






  let enterCityForm = document.querySelector("#enter-city");
  enterCityForm.addEventListener("submit", hadleSubmit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);


let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusTemperature = null;


  search("Valencia");

  


