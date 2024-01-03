const myForm = document.getElementById('myForm')
const locationInput = document.getElementById('location');
const myImg = document.getElementById('myImg');
const temperatureDiv = document.getElementById('temperature-div');
const unitSwitch = document.querySelector('.switch');
const unitText = document.getElementById('unit');

const temperature = [0, 0];
let unit = 'celsius';

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

async function weatherAPI(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=623ae80523c24099aad193932240301&q=${location}`, {mode: "cors"})
    .then(response => {
        return response.json();
    })
    .then(response => {
        myImg.src = response.current.condition.icon;
        temperature[0] = response.current.temp_c;
        temperature[1] = response.current.temp_f;
        if (unit === 'celsius') {
            temperatureDiv.textContent = temperature[0] + '\u2103';
        } else {
            temperatureDiv.textContent = temperature[1] + '\u2109';
        }
    })
    .catch(error => {
        locationInput.setCustomValidity('Location Not Found');
    })
}


locationInput.addEventListener('keyup', (e) => {
    if (locationInput.value.match(/[a-zA-Z]{2,}/)) {
        locationInput.setCustomValidity('');
    }

    if (e.key === 'Enter') {
        weatherAPI(locationInput.value)
        myImg.src = 'image/loading.gif';
    }
})

unitSwitch.addEventListener('change', () => {
    if (unitText.textContent === 'celsius') {
        unitText.textContent = 'fahrenheit';
        temperatureDiv.textContent = temperature[1] + '\u2109';
        unit = 'fahrenheit';
    } else {
        unitText.textContent = 'celsius';
        temperatureDiv.textContent = temperature[0] + '\u2103';
        unit = 'celsius';
    }
})

