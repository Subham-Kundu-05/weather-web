const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "7c0f603033da3ada0154ad882957c121";
const searchBOX = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var result = await response.json();
    console.log(result);
    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
    document.querySelector(".wind").innerHTML = result.wind.speed + " km/h";
    document.querySelector(".temp_max").innerHTML = "Maximum temperature  : " + result.main.temp_max + "°C";
    document.querySelector(".temp_min").innerHTML = "Minimum temperature : " + result.main.temp_min + "°C";
    document.querySelector(".description").innerHTML = "Weather condition : " + result.weather[0].main;
    document.querySelector(".pressure").innerHTML = "Air Pressure : " + result.main.pressure + "mb";
    document.querySelector(".sunset").innerHTML = "Sunset time : " + result.sys.sunset;
    document.querySelector(".sunrise").innerHTML = "Sunrise time : " + result.sys.sunrise;
}

searchBTN.addEventListener("click", (e) => {
    e.preventDefault();
    checkweather(searchBOX.value);
})
checkweather("");