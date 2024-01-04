const myForm = document.getElementById('myForm')
const searchInput = document.getElementById('search');
const myImg = document.getElementById('myImg');
const temperatureDiv = document.getElementById('temperature-div');
const unitSwitch = document.querySelector('.switch');
const unitText = document.getElementById('unit');
const feel = document.getElementById('feel');
const humidity = document.getElementById('humidity');
const rainChance = document.getElementById('rain-chance');
const windSpeed = document.getElementById('wind-speed');
const days = document.querySelectorAll('.days');

weather();

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

function weather() {
    let weatherData;

    weatherAPI('london');

    async function weatherAPI(location) {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=623ae80523c24099aad193932240301&days=7&q=${location}`, {mode: "cors"});
        weatherData = await response.json();
        console.log(weatherData)
        displayCurrentWeather(weatherData, 'celsius')
        displayForecastWeather(weatherData, 'celsius');
    }
    
    function displayCurrentWeather(data, unit) {
        myImg.src = data.current.condition.icon;
        if (unit === 'celsius') {
            temperatureDiv.textContent = weatherData.current.temp_c + '\u2103';
            feel.textContent = 'feels like ' + data.current.feelslike_c;
            windSpeed.textContent = 'wind speed: ' + data.current.wind_kph;
        } else if (unit === 'fahrenheit') {
            temperatureDiv.textContent = weatherData.current.temp_f + '\u2109';
            feel.textContent = 'feels like ' + data.current.feelslike_f;
            windSpeed.textContent = 'wind speed: ' + data.current.wind_mph;
        }
        humidity.textContent = 'humidity: ' +data.current.humidity + '%';
    }

    function displayForecastWeather(data, unit) {
        const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for(i in weatherData.forecast.forecastday){
            const dayOfWeek = new Date(weatherData.forecast.forecastday[i].date).getDay();
            console.log(daysInWeek[dayOfWeek]);
            days[i].textContent = daysInWeek[dayOfWeek];
        }
    };

    searchInput.addEventListener('keyup', (e) => {
        if (searchInput.value.match(/[a-zA-Z]{2,}/)) {
            searchInput.setCustomValidity('');
        }
    
        if (e.key === 'Enter') {
            weatherAPI(searchInput.value);
            myImg.src = 'image/loading.gif';
        }
    })
    
    unitSwitch.addEventListener('change', () => {
        if (unitText.textContent === 'celsius') {
            unitText.textContent = 'fahrenheit';
            displayCurrentWeather(weatherData, 'fahrenheit');
        } else {
            unitText.textContent = 'celsius';
            displayCurrentWeather(weatherData, 'celsius');
        }
    })
}




