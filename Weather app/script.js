const apiKey = "f0ebf86ada414d52b5c150439262402";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
            return;
        }

        document.getElementById("cityName").innerText =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("temperature").innerText =
            `🌡 Temperature: ${data.current.temp_c} °C`;

        document.getElementById("description").innerText =
            `🌥 Condition: ${data.current.condition.text}`;

        document.getElementById("humidity").innerText =
            `💧 Humidity: ${data.current.humidity}%`;

        document.getElementById("windSpeed").innerText =
            `🌬 Wind: ${data.current.wind_kph} kph`;

    } catch (error) {
        alert("Error fetching weather data");
    }
}