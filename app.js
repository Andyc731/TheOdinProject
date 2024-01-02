const submitButton = document.getElementById('submit');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const myForm = document.getElementById('form');

const inputs = [email, country, zip, password];

inputs.forEach(item => {
    if (checkEmpty(item)) {
        item.setCustomValidity('Is empty');
    }
})

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.alert("high five");
})

email.addEventListener('input', () => {
    checkValidity(
        email,
        "ex: example@example.com",
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
})

country.addEventListener('input', () => {
    checkValidity(
        country,
        'ex: Canada',
        /^[a-zA-Z]{2,}/
    )
})

zip.addEventListener('input', () => {
    checkValidity(
        zip,
        'ex: 11111',
        /(^\d{5}$)|(^\d{5}-\d{4}$)/
    )
})

password.addEventListener('input', () => {
    checkValidity(
        password,
        'must include lowercase letter, uppercase letter, number, and special character. length 6-20',
        /^(?=.*[0-9])(?=.*[!@#$%^&*,.])[A-Za-z\d@$!%*?&,.]{6,20}$/
    )
})

function checkEmpty(input) {
    return input.value === '' ? true : false;
}

function checkValidity(input, message, regex) {
    if (!input.value.match(regex)) {
        input.setCustomValidity(message);
        input.reportValidity();
    } else {
        input.setCustomValidity('');
    }
}