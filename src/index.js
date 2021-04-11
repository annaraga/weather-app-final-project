function showTemperature (response){


let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#weather-description");
let degreesElement = document.querySelector("#degrees");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");

cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
degreesElement.innerHTML = Math.round(response.data.main.temp);
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);



}



let apiKey = "add14ae795612e68aab6557cae6f369f";
let city = `Valencia`
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);