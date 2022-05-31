const locationName = document.querySelector(".location");
const weatherInfo = document.querySelector(".weather");

fetch('http://api.openweathermap.org/data/2.5/weather?q=Rainton&APPID=36028067291ad710dca13cb67f936eb9', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        locationName.textContent = response.name;
        weatherInfo.textContent = response.weather[0].description;
    });