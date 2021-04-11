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


function showTemperature (response){

let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#weather-description");
let degreesElement = document.querySelector("#degrees");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
degreesElement.innerHTML = Math.round(response.data.main.temp);
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);

}



function search(city) {
        let apiKey = "add14ae795612e68aab6557cae6f369f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);  
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

search("Valencia");

  let enterCityForm = document.querySelector("#enter-city");
  enterCityForm.addEventListener("submit", hadleSubmit);




