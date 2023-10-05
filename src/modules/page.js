import createHomeContainer from "./home";

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

        }
    })

    return menuButton;
}

function createButtonContainer() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const buttonsArray = [createHomeButton(), createMenuButton()];

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

function createPage() {
    const content = document.getElementById('content');
    
    const header = createHeader();
    content.appendChild(header);

    content.appendChild(createButtonContainer());
    
    content.appendChild(createHomeContainer());
    
};

export default createPage;