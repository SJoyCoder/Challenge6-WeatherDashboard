let apiKey = '8f8c6da20ce2891419f3a9757fa8ba62';
let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let currentDate = moment().format(MM/DD/YYYY);

document.querySelector("#currentDate").textContent = currentDate;

// let displayCity = document.querySelector("#displayCity");
// let currentDate = moment().
// let cityName = cityInput.value;

// searchBtn.addEventListener('click', function(){
//     if (cityName !== null){
//         citySearch();
//     }
// });

let cityName = "Dallas";

// function citySearch(){
    
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
            
            
        })
    })
// };


// displayCity.textContent(cityName + )
