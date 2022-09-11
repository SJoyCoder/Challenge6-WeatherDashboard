let apiKey = '8f8c6da20ce2891419f3a9757fa8ba62';

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
    
    
        })
})