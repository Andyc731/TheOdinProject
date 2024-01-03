const img = document.querySelector('img');
const btn = document.getElementById('fetchBtn')

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
console.log('blah');
})