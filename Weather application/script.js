// API endpoint URL and your API key
const apiUrl = 'https://api.weatherapi.com/v1/current.json';
// const apiUrl = 'https://api.openweathermap.org/data/3.0/weather?q=';
const apiKey = '701c6236dfc94e239a462612232006';

// Get weather data for a given location
const getWeatherData = async (location) => {
  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${location}`);
    if (response.ok) {
      const data = await response.json();
      return data.current;
    } else {
      throw new Error('Failed to fetch weather data');
    }
  } catch (error) {
    throw new Error('An error occurred while retrieving weather data');
  }
};

// Update the displayed weather information on the web page
const updateWeatherInfo = (weatherData) => {
  const weatherInfoElement = document.getElementById('weatherInfo');
  weatherInfoElement.innerHTML = `
    <p>Temperature: ${weatherData.temp_c}°C</p>
    <p>Condition: ${weatherData.condition.text}</p>
    <p>Humidity: ${weatherData.humidity}%</p>
  `;
};

// Event listener for the "Get Weather" button
const getWeatherButton = document.getElementById('getWeatherButton');
getWeatherButton.addEventListener('click', async ()=> {
        const locationInput = document.getElementById('locationInput');
        const location = locationInput.value.trim();

         // Call the getWeatherData function and update weather information
  try {
    const weatherData = await getWeatherData(location);
    updateWeatherInfo(weatherData);
  } catch (error) {
    console.error(error);
    // Handle error case, e.g., display an error message to the user
  }
})

 
