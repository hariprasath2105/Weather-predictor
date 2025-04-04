async function getWeather() {
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const apiKey = "YOUR_OPENWEATHER_API_KEY";
    
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Selected Date:</strong> ${date}</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Geolocation function
document.getElementById('get-location').addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = "42dc6145c1d601b70b7ebf94d0eea3a9";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                document.getElementById('weather').innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                `;
            } catch (error) {
                console.error("Error:", error);
            }
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
