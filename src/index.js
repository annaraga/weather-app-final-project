function showTemperature (response){

console.log(response.data);

}



let apiKey = "add14ae795612e68aab6557cae6f369f";
let city = `Valencia`
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);