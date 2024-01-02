const submitButton = document.getElementById('submit');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const myForm = document.getElementById('form');

const inputs = [email, country, zip, password];

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("ex: example@example.com");
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    }
})

country.addEventListener('input', () => {
    if (!country.value.match(/^[a-zA-Z]{2,}/)) {
        country.setCustomValidity('ex: Canada');
        country.reportValidity();
    } else {
        country.setCustomValidity('');
    }
})

zip.addEventListener('input', () => {
    if (!zip.value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
        zip.setCustomValidity('ex: 11111');
        zip.reportValidity();
    } else {
        zip.setCustomValidity('');
    }
})

password.addEventListener('input', () => {
    if (!password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*,.])[A-Za-z\d@$!%*?&,.]{6,20}$/)){
        password.setCustomValidity('must include lowercase letter, uppercase letter, number, and special character. length 6-20')
        password.reportValidity();
    } else {
        password.setCustomValidity('');
    }
})

function checkEmpty(input) {
    return input.value === '' ? true : false;
}