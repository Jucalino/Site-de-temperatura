let weather = {
    apiKey: "31c8a2c054d9749a9d313334d41481b0",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apiKey
         )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
  
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const{ temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "A temperatura em " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"; 
        document.querySelector(".humidity").innerText = "Humidade: " + humidity + "%";
        document.querySelector(".wind").innerText = "Velocidade do vento: " + speed + "km/h"
        document.querySelector (".weather").classList.remove("loading");
    },
    btnBusca: function () {
        this.fetchWeather(document.querySelector("#txtBusca").value);
    },
};
document.querySelector("#btnBusca").addEventListener("click", function () {
    weather.btnBusca();
});
document.querySelector ("#txtBusca").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.btnBusca();
    }
})

weather.fetchWeather("")