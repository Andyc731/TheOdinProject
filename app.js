const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

buttonToggle(menuButton, menu);

function buttonToggle(button, menu) {
    button.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
}