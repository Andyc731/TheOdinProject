const myForm = document.getElementById('myForm')
const locationInput = document.getElementById('location');
const myImg = document.getElementById('myImg');
const temperature = document.getElementById('temperature');

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
        temperature.textContent = `${response.current.temp_c}` + '\u2103';
        console.log(response);
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
        weatherAPI(locationInput.value);
    }

})