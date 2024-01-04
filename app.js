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


weather();

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

function weather() {
    let weatherData;

    async function weatherAPI(location) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=623ae80523c24099aad193932240301&q=${location}`, {mode: "cors"});
        weatherData = await response.json();
        console.log(weatherData)
        displayWeather(weatherData, 'celsius');
    }

    weatherAPI('london');
    
    function displayWeather(data, unit) {
        myImg.src = data.current.condition.icon;
        if (unit === 'celsius') {
            temperatureDiv.textContent = weatherData.current.temp_c + '\u2103';
        } else if (unit === 'fahrenheit') {
            temperatureDiv.textContent = weatherData.current.temp_f + '\u2109';
        }
        feel
    }

    searchInput.addEventListener('keyup', (e) => {
        if (searchInput.value.match(/[a-zA-Z]{2,}/)) {
            searchInput.setCustomValidity('');
        }
    
        if (e.key === 'Enter') {
            weatherAPI(searchInput.value)
            myImg.src = 'image/loading.gif';
        }
    })
    
    unitSwitch.addEventListener('change', () => {
        if (unitText.textContent === 'celsius') {
            unitText.textContent = 'fahrenheit';
            displayWeather(weatherData, 'fahrenheit');
        } else {
            unitText.textContent = 'celsius';
            displayWeather(weatherData, 'celsius');
        }
    })
}




