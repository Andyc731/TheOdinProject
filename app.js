async function weatherAPI(location) {

    fetch(`https://api.weatherapi.com/v1/current.json?key=623ae80523c24099aad193932240301&q=${location}`, {mode: "cors"})
    .then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
    })
}
