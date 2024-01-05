const myForm = document.getElementById('myForm')

weather();

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

function weather() {
    const searchInput = document.getElementById('search');
    const unitSwitch = document.querySelector('.switch');
    const myImg = document.getElementById('myImg');
    
    
    let weatherData;
    let unit = 'celsius';
    
    weatherAPI('london');
    
    async function weatherAPI(location) {

        
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=623ae80523c24099aad193932240301&days=7&q=${location}`, {mode: "cors"});
        weatherData = await (response.ok ? response.json() : Promise.reject(new Error ('blah'))).catch(e => {myImg.src = 'image/error.jpg'});
        console.log(weatherData)
        displayCurrentWeather(weatherData);
        displayForecastWeather(weatherData);
    }
    
    function displayCurrentWeather(data) {
        const temperatureDiv = document.getElementById('temperature-div');
        const feel = document.getElementById('feel');
        const humidity = document.getElementById('humidity');
        const rainChance = document.getElementById('rain-chance');
        const windSpeed = document.getElementById('wind-speed');
        
        myImg.src = data.current.condition.icon;
        if (unit === 'celsius') {
            temperatureDiv.textContent = weatherData.current.temp_c + '\u2103';
            feel.textContent = 'feels like ' + data.current.feelslike_c + '\u2103';
            windSpeed.textContent = 'wind speed: ' + data.current.wind_kph + 'km/h';
        } else if (unit === 'fahrenheit') {
            temperatureDiv.textContent = weatherData.current.temp_f + '\u2109';
            feel.textContent = 'feels like ' + data.current.feelslike_f + '\u2109';
            windSpeed.textContent = 'wind speed: ' + data.current.wind_mph + 'mph';
        }
        humidity.textContent = 'humidity: ' +data.current.humidity + '%';
        rainChance.textContent = 'chance of rain: ' + data.forecast.forecastday[0].day.daily_chance_of_rain + '%';
    }

    function displayForecastWeather(data) {
        const bottomCont = document.getElementById('container-bottom');
        const days = document.querySelectorAll('.days');

        for(i in data.forecast.forecastday){
            const thisDay = data.forecast.forecastday[i];

            bottomCont.replaceChild(createDayDiv(thisDay, unit), days[i]);
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
        unit === 'celsius' ? unit = 'fahrenheit' : unit = 'celsius';
        displayWeather(weatherData);
    })

    function displayWeather(data) {
        const unitText = document.getElementById('unit');
        unitText.textContent = unit;
        displayCurrentWeather(weatherData);
        displayForecastWeather(weatherData);
    }
}


function createDiv(className, text) {
    const newDiv = document.createElement('div');
    if (className) newDiv.classList.add(className);
    newDiv.textContent = text;
    return newDiv;
}

function createImg(className, source) {
    const newImg = document.createElement('img');
    if (className) newImg.classList.add(className);
    newImg.src= source;
    return newImg;
}

function getDay(day){
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = new Date(day.date).getDay();
    return daysInWeek[dayOfWeek];
}

function createDayDiv(day, unit) {
    const container = createDiv('days');
    const flexContainer = createDiv('day-flex');
    const dayText = createDiv('dayText', getDay(day));
    const maxTemp = createDiv('maxTemp', unit === 'celsius' ? day.day.maxtemp_c + '\u2103' : day.day.maxtemp_f + '\u2109');
    const minTemp = createDiv('minTemp', unit === 'celsius' ? day.day.mintemp_c + '\u2103' : day.day.mintemp_f + '\u2109');
    const icon = createImg('day-icon', day.day.condition.icon);

    flexContainer.appendChild(dayText);
    flexContainer.appendChild(maxTemp);
    flexContainer.appendChild(minTemp);
    container.appendChild(flexContainer)
    container.appendChild(icon);

    return container;
}


