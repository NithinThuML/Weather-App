const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + "&appid=" +apiKey);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML = data.sys.country;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " kph";
        document.querySelector(".weather-icon").src = "./images/" + data.weather[0].main + ".png";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    let city = searchBox.value;
    checkWeather(city);
    searchBox.value = "";
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key == "Enter"){
        let city = searchBox.value;
        checkWeather(city);
        searchBox.value = "";
    }
});