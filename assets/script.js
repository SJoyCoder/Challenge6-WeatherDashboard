let apiKey = '8f8c6da20ce2891419f3a9757fa8ba62';
let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let cityBtnList = document.querySelector("#cityBtnList");



let cityName;

let cityList = [];

let lat; 
let lon;
    function searchWeather(){
        let cityName = cityInput.value;

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {
        
        return response.json()
        
    })
    .then(function (cityData){
        
        console.log(cityData[0]);
        console.log(cityData[0].lat);
        console.log(cityData[0].lon);
        
        lat = (cityData[0].lat);
        lon = (cityData[0].lon);
        
        return {lat:cityData[0].lat, lon:cityData[0].lon}

        
    })
    .then(function(){
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            
            return response.json()
            
        })
        .then(function (forecastData) {
            
            console.log(forecastData);
            let conversion1 = forecastData.list[8].dt * 1000;
            let conversion2 = new Date(conversion1);
            let conversion3 = conversion2.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#next1").textContent = (conversion3);
            document.querySelector("#next1Img").src = "http://openweathermap.org/img/wn/" + forecastData.list[8].weather[0].icon + "@2x.png";
            document.querySelector("#next1Temp").textContent = ("Temp: " + forecastData.list[8].main.temp) + "℉";
            document.querySelector("#next1Wind").textContent = ("Wind: " + forecastData.list[8].wind.speed + "mph");
            document.querySelector("#next1Humidity").textContent = ("Humidity: " + forecastData.list[8].main.humidity + "%");

            let conversionA1 = forecastData.list[16].dt * 1000;
            let conversionA2 = new Date(conversionA1);
            let conversionA3 = conversionA2.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#next2").textContent = (conversionA3);
            document.querySelector("#next2Img").src = "http://openweathermap.org/img/wn/" + forecastData.list[16].weather[0].icon + "@2x.png";
            document.querySelector("#next2Temp").textContent = ("Temp: " + forecastData.list[16].main.temp + "℉");
            document.querySelector("#next2Wind").textContent = ("Wind: " + forecastData.list[16].wind.speed) + "mph";
            document.querySelector("#next2Humidity").textContent = ("Humidity: " + forecastData.list[16].main.humidity + "%");

            let conversionB1 = forecastData.list[24].dt * 1000;
            let conversionB2 = new Date(conversionB1);
            let conversionB3 = conversionB2.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#next3").textContent = (conversionB3);
            document.querySelector("#next3Img").src = "http://openweathermap.org/img/wn/" + forecastData.list[24].weather[0].icon + "@2x.png";
            document.querySelector("#next3Temp").textContent = ("Temp: " + forecastData.list[24].main.temp + "℉");
            document.querySelector("#next3Wind").textContent = ("Wind: " + forecastData.list[24].wind.speed + "mph");
            document.querySelector("#next3Humidity").textContent = ("Humidity: " + forecastData.list[24].main.humidity + "%");

            let conversionC1 = forecastData.list[32].dt * 1000;
            let conversionC2 = new Date(conversionC1);
            let conversionC3 = conversionC2.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#next4").textContent = (conversionC3);
            document.querySelector("#next4Img").src = "http://openweathermap.org/img/wn/" + forecastData.list[32].weather[0].icon + "@2x.png";
            document.querySelector("#next4Temp").textContent = ("Temp: " + forecastData.list[32].main.temp + "℉");
            document.querySelector("#next4Wind").textContent = ("Wind: " + forecastData.list[32].wind.speed + "mph");
            document.querySelector("#next4Humidity").textContent = ("Humidity: " + forecastData.list[32].main.humidity + "%");

            let conversionD1 = forecastData.list[39].dt * 1000;
            let conversionD2 = new Date(conversionD1);
            let conversionD3 = conversionD2.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#next5").textContent = (conversionD3);
            document.querySelector("#next5Img").src = "http://openweathermap.org/img/wn/" + forecastData.list[39].weather[0].icon + "@2x.png";
            document.querySelector("#next5Temp").textContent = ("Temp: " + forecastData.list[39].main.temp + "℉");
            document.querySelector("#next5Wind").textContent = ("Wind: " + forecastData.list[39].wind.speed + "mph");
            document.querySelector("#next5Humidity").textContent = ("Humidity: " + forecastData.list[30].main.humidity + "%");        

        })
        
    })
    .then(function (){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            
            return response.json()
            
        })
        .then(function (currentData) {

            console.log(currentData);

            document.querySelector("#displayCity").textContent = (currentData.name);
            let conversion1 = currentData.dt * 1000;
            let conversion2 = new Date(conversion1);
            let conversion3 = conversion2.toLocaleString("en-US", {month: "numeric", day: "numeric", year: "numeric"});
            document.querySelector("#currentDate").textContent = (conversion3);
            document.querySelector("#currentIcon").src = 
            "https://openweathermap.org/img/wn/" + currentData.weather[0].icon + "@2x.png";
            document.querySelector("#currentTemp").textContent = ("Temp: " + currentData.main.temp + "℉");
            document.querySelector("#currentWind").textContent = ("Wind: " + currentData.wind.speed + "mph");
            document.querySelector("#currentHumidity").textContent = ("Humidity: " + currentData.main.humidity + "%");
        }
    )}
    )
 
    }

    searchBtn.addEventListener('click', function(){
        searchWeather();
        cityList.push(cityInput.value);
        localStorage.setItem("city", JSON.stringify(cityList));
        citySearch();
    })

    function citySearch(){
    for (let i = 0; i < cityList.length; i++) {
        let cityBtn = document.createElement("button");
        cityBtn.textContent = localStorage.getItem("city"[i]);
        cityBtnList.append(cityBtn);
        cityBtn.classList.add("cityBtn");
    }}
