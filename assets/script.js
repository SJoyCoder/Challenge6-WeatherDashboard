let apiKey = '8f8c6da20ce2891419f3a9757fa8ba62';
let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
// let currentDate = moment().format(MM/DD/YYYY);

// document.querySelector("#currentDate").textContent = currentDate;


let cityName = "Dallas";


    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {
        
        return response.json()
        
    })
    .then(function (cityData){
        
        console.log(cityData[0]);
        console.log(cityData[0].lat);
        console.log(cityData[0].lon);
        
        
        return {lat:cityData[0].lat, lon:cityData[0].lon}
        
    })
    .then(function(latLonData){
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}`)
        .then(function (response) {
            
            return response.json()
            
        })
        .then(function (data) {
            
            console.log(data);
            document.querySelector("#displayCity").textContent = (data.city.name);
            document.querySelector("#currentTemp").textContent = ("Temp: " + data.list[0].main.temp);
            document.querySelector("#currentWind").textContent = ("Wind: " + data.list[0].wind.speed);
            document.querySelector("#currentHumidity").textContent = ("Humidity: " + data.list[0].main.humidity);
            document.querySelector("#next1Temp").textContent = ("Temp: " + data.list[1].main.temp);
            document.querySelector("#next1Wind").textContent = ("Wind: " + data.list[1].wind.speed);
            document.querySelector("#next1Humidity").textContent = ("Humidity: " + data.list[1].main.humidity);
            document.querySelector("#next2Temp").textContent = ("Temp: " + data.list[2].main.temp);
            document.querySelector("#next2Wind").textContent = ("Wind: " + data.list[2].wind.speed);
            document.querySelector("#next2Humidity").textContent = ("Humidity: " + data.list[2].main.humidity);
            document.querySelector("#next3Temp").textContent = ("Temp: " + data.list[3].main.temp);
            document.querySelector("#next3Wind").textContent = ("Wind: " + data.list[3].wind.speed);
            document.querySelector("#next3Humidity").textContent = ("Humidity: " + data.list[3].main.humidity);
            document.querySelector("#next4Temp").textContent = ("Temp: " + data.list[4].main.temp);
            document.querySelector("#next4Wind").textContent = ("Wind: " + data.list[4].wind.speed);
            document.querySelector("#next4Humidity").textContent = ("Humidity: " + data.list[4].main.humidity);
            document.querySelector("#next5Temp").textContent = ("Temp: " + data.list[5].main.temp);
            document.querySelector("#next5Wind").textContent = ("Wind: " + data.list[5].wind.speed);
            document.querySelector("#next5Humidity").textContent = ("Humidity: " + data.list[5].main.humidity);
            
            
            
        })
    })

