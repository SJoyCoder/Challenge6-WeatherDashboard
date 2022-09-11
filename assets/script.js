let apiKey = '8f8c6da20ce2891419f3a9757fa8ba62';
let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
// let currentDate = moment().format(MM/DD/YYYY);

// document.querySelector("#currentDate").textContent = currentDate;


let cityName = "Denver";


    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {
        
        return response.json()
        
    })
    .then(function (cityData){
        
        console.log(cityData[0]);
        console.log(cityData[0].lat);
        console.log(cityData[0].lon);
        
        let lat = (cityData[0].lat);
        let lon = (cityData[0].lon);
        
        return {lat:cityData[0].lat, lon:cityData[0].lon}

        
    })
    .then(function(){
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(function (response) {
            
            return response.json()
            
        })
        .then(function (forecastData) {
            
            console.log(forecastData);

            document.querySelector("#next1").textContent = (forecastData.list[4].dt_txt);
            document.querySelector("#next1Temp").textContent = ("Temp: " + forecastData.list[4].main.temp);
            document.querySelector("#next1Wind").textContent = ("Wind: " + forecastData.list[4].wind.speed + "mph");
            document.querySelector("#next1Humidity").textContent = ("Humidity: " + forecastData.list[4].main.humidity + "%");

            document.querySelector("#next2").textContent = (forecastData.list[12].dt_txt);
            document.querySelector("#next2Temp").textContent = ("Temp: " + forecastData.list[12].main.temp);
            document.querySelector("#next2Wind").textContent = ("Wind: " + forecastData.list[12].wind.speed) + "mph";
            document.querySelector("#next2Humidity").textContent = ("Humidity: " + forecastData.list[12].main.humidity + "%");

            document.querySelector("#next3").textContent = (forecastData.list[20].dt_txt);
            document.querySelector("#next3Temp").textContent = ("Temp: " + forecastData.list[20].main.temp);
            document.querySelector("#next3Wind").textContent = ("Wind: " + forecastData.list[20].wind.speed + "mph");
            document.querySelector("#next3Humidity").textContent = ("Humidity: " + forecastData.list[20].main.humidity + "%");

            document.querySelector("#next4").textContent = (forecastData.list[28].dt_txt);
            document.querySelector("#next4Temp").textContent = ("Temp: " + forecastData.list[28].main.temp);
            document.querySelector("#next4Wind").textContent = ("Wind: " + forecastData.list[28].wind.speed + "mph");
            document.querySelector("#next4Humidity").textContent = ("Humidity: " + forecastData.list[28].main.humidity + "%");

            document.querySelector("#next5").textContent = (forecastData.list[36].dt_txt);
            document.querySelector("#next5Temp").textContent = ("Temp: " + forecastData.list[36].main.temp);
            document.querySelector("#next5Wind").textContent = ("Wind: " + forecastData.list[36].wind.speed + "mph");
            document.querySelector("#next5Humidity").textContent = ("Humidity: " + forecastData.list[36].main.humidity + "%");        
        })
        
    
    })
    .then(function (){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(function (response) {
            
            return response.json()
            
        })
        .then(function (currentData) {

            console.log(currentData);

            document.querySelector("#displayCity").textContent = (currentData.city.name);
            document.querySelector("#currentDate").textContent = (currentData.list[0].dt_txt);
            // document.querySelector("#currentIcon").innerHTML = (currentData.list[0].weather[0].icon);
            document.querySelector("#currentTemp").textContent = ("Temp: " + currentData.list[0].main.temp);
            document.querySelector("#currentWind").textContent = ("Wind: " + currentData.list[0].wind.speed + "mph");
            document.querySelector("#currentHumidity").textContent = ("Humidity: " + currentData.list[0].main.humidity + "%");
        })
    })
