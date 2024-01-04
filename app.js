const myForm = document.getElementById('myForm')
const searchInput = document.getElementById('search');
const myImg = document.getElementById('myImg');
const temperatureDiv = document.getElementById('temperature-div');
const unitSwitch = document.querySelector('.switch');
const unitText = document.getElementById('unit');

let weatherData;

weatherAPI('london');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

async function weatherAPI(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=623ae80523c24099aad193932240301&q=${location}`, {mode: "cors"});
    weatherData = await response.json();
    console.log(weatherData)
    displayWeather(weatherData, 'celsius');
}

function displayWeather(data, unit) {
    myImg.src = data.current.condition.icon;
    if (unit === 'celsius') {
        temperatureDiv.textContent = weatherData.current.temp_c + '\u2103';
    } else if (unit === 'fahrenheit') {
        temperatureDiv.textContent = weatherData.current.temp_f + '\u2109';
    }
}


// async function displayWeather(location, unit) {
//     const weatherData = await weatherAPI(location);
//     myImg.src = weatherData.current.condition.icon;
//     if (unit === 'celsius') {
//         temperatureDiv.textContent = weatherData.current.temp_c + '\u2103';
//     } else if (unit === 'fahrenheit') {
//         temperatureDiv.textContent = weatherData.current.temp_f + '\u2109';
//     }

// }


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

