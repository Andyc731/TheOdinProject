import createHomeContainer from "./home";
import createMenuContainer from "./menu";
import createContactContainer from "./contact";

function createHeader() {
    const header = document.createElement('h1');
    header.textContent = "Chung's HanShik";

    return header;
}

function createHomeButton() {
    const homeButton = document.createElement('div');
    
    homeButton.textContent = 'Home';
    homeButton.classList.add('active');
    homeButton.classList.add('buttons');

    homeButton.addEventListener('click', () => {
        if (!homeButton.classList.contains('active')){
            eventListenerForButton(homeButton);
            displayActive('home-container');
        }
    })

    return homeButton;
}

function createMenuButton() {
    const menuButton = document.createElement('div');
    
    menuButton.textContent = 'Menu';

    menuButton.classList.add('buttons');

    menuButton.addEventListener('click', () => {
        if (!menuButton.classList.contains('active')){
            eventListenerForButton(menuButton);
            displayActive('menu-container');
        }
    })

    return menuButton;
}

function createContactButton() {
    const contactButton = document.createElement('div');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('buttons');

    contactButton.addEventListener('click', () => {
        if (!contactButton.classList.contains('active')){
            eventListenerForButton(contactButton);
            displayActive('contact-container');
        }
    })

    return contactButton;
}

function createButtonContainer() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const buttonsArray = [createHomeButton(), createMenuButton(), createContactButton()];

    buttonsArray.forEach((button) => {
        buttonsContainer.appendChild(button);
    })

    return buttonsContainer;
}

function eventListenerForButton(button) {
    const buttonsArray = document.querySelectorAll('.buttons');

    buttonsArray.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    })

    button.classList.add('active');
}

function displayActive(activeClass) {
    const home = document.querySelector('.home-container');
    const menu = document.querySelector('.menu-container');
    const contact = document.querySelector('.contact-container');

    const tabArray = [home, menu, contact];

    tabArray.forEach((tab) => {
        tab.classList.contains(activeClass) ? tab.style.display = 'grid' : tab.style.display = 'none';
    })
}

function createPage() {
    const content = document.getElementById('content');
    const header = createHeader();
    
    content.appendChild(header);

    content.appendChild(createButtonContainer());
    content.appendChild(createHomeContainer());
    content.appendChild(createMenuContainer());
    content.appendChild(createContactContainer());
};

export default createPage;