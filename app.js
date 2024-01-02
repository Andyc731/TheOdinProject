const submitButton = document.getElementById('submit');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');

const inputs = [email, country, zip, password];

submitButton.addEventListener('click', () => {
    inputs.forEach(item => {
        if (checkEmpty(item)) {

        }
    })
})

email.addEventListener('input', () => {
    if (!email.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            console.log ('input does not match format');
        }
})

function checkEmpty(input) {
    return input.value === '' ? true : false;
}