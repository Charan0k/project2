async function fetchWeather() {
    const location = document.getElementById('locationInput').value.trim();
    if (location) {
        const apiKey = '25df7cc542e79c4a51ea734ab5ea4516';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found');
            }
        } catch (error) {
            console.error('Error fetching the weather data:', error);
        }
    } else {
        alert('Please enter a location');
    }
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
        <div class="weather-info">Location: ${data.name}</div>
        <div class="weather-info">Temperature: ${data.main.temp}°C</div>
        <div class="weather-info">Weather: ${data.weather[0].description}</div>
        <div class="weather-info">Humidity: ${data.main.humidity}%</div>
        <div class="weather-info">Wind Speed: ${data.wind.speed} m/s</div>
    `;
}
