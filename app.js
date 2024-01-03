const img = document.querySelector('img');
const btn = document.getElementById('fetchBtn')
const formBtn = document.getElementById('formBtn');
const search = document.getElementById('search');
const form = document.getElementById('myForm');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=1GKAaRMDOKUH1DaMVN5XYY5YKQJct6oR&s=cats', {mode: 'cors'})
    .then(function(response) {
    return response.json();
  }).then(function(response) {
    img.src = response.data.images.original.url;
  }
);

btn.addEventListener('click', () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=1GKAaRMDOKUH1DaMVN5XYY5YKQJct6oR&s=cats', {mode: 'cors'})
    .then(function(response) {
    return response.json();
  }).then(function(response) {
    img.src = response.data.images.original.url;
  }
);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

formBtn.addEventListener('click', () => {
    const input = search.value;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1GKAaRMDOKUH1DaMVN5XYY5YKQJct6oR&s=${input}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    }).then(function(response) {
        img.src = response.data.images.original.url;
    }).catch(function() {
        console.log('empty input');
    })
})