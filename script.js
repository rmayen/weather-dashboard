document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('search-box').value.trim();
    if (city) {
        fetchWeatherData(city);
    }
});

document.getElementById('search-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const city = document.getElementById('search-box').value.trim();
        if (city) {
            fetchWeatherData(city);
        }
    }
});

function fetchWeatherData(city) {
    // Replace 'YOUR_API_KEY' with your actual API key from https://openweathermap.org/api
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    showLoading();

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status === 404 ? 'City not found' : 'Failed to fetch weather data');
        }
        return response.json();
    })
    .then(data => {
        updateWeatherDisplay(data);
        hideError();
    })
    .catch(error => {
        showError(error.message);
        clearWeatherDisplay();
    });
}

function updateWeatherDisplay(data) {
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('weather-description').textContent = capitalizeFirst(data.weather[0].description);
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weather-icon').style.display = 'block';

    document.querySelector('.current-weather').style.display = 'block';
}

function clearWeatherDisplay() {
    document.getElementById('city-name').textContent = '';
    document.getElementById('weather-description').textContent = '';
    document.getElementById('temperature').textContent = '';
    document.getElementById('humidity').textContent = '';
    document.getElementById('wind-speed').textContent = '';
    document.getElementById('weather-icon').style.display = 'none';
}

function showLoading() {
    document.getElementById('city-name').textContent = 'Loading...';
    document.getElementById('weather-description').textContent = '';
    document.getElementById('temperature').textContent = '';
    document.getElementById('humidity').textContent = '';
    document.getElementById('wind-speed').textContent = '';
    document.querySelector('.current-weather').style.display = 'block';
    hideError();
}

function showError(message) {
    let errorEl = document.getElementById('error-message');
    if (!errorEl) {
        errorEl = document.createElement('p');
        errorEl.id = 'error-message';
        errorEl.style.color = '#e53935';
        errorEl.style.fontWeight = 'bold';
        document.querySelector('.search-box').after(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
}

function hideError() {
    const errorEl = document.getElementById('error-message');
    if (errorEl) errorEl.style.display = 'none';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
