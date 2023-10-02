function createHeader() {
    const header = document.createElement('h1');
    header.textContent = "Chung's HanShik";

    return header;
}


function createIntro() {
    const intro = document.createElement('div');
    intro.classList.add('intro');
    
    intro.textContent = "We koreans. We cook delicious korean food. Yay koreans. Yes Bibimbap. Yes Gukbap, Yes Samgyeopsal, Yes Kimchi. Food is love"
    
    return intro;
}

function createHours() {
    const hourContainer = document.createElement('div');
    hourContainer.classList.add('hours');
    
    const text = "Monday-Friday 9am-9pm. Saturday 11am-8pm. Sunday 11am-8pm".split(".");
    text.forEach((item) => {
        const hours = document.createElement('p');
        hours.textContent = item;
        hourContainer.appendChild(hours);
    })
    
    return hourContainer;
}

function createLocation() {
    const location = document.createElement('div');
    location.classList.add('location');

    location.textContent = '122 Blah street, NW, Calgary, AB'

    return location;
}

function createInfoContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    
    container.appendChild(createIntro());
    container.appendChild(createHours());
    container.appendChild(createLocation());

    return container;
}

function createHomeButton() {
    const homeButton = document.createElement('div');

    homeButton.classList.add('homeButton');

    return homeButton;
}

function createMenuButton() {
    const menuButton = document.createElement('div');

    menuButton.classList.add('menuButton');

    return menuButton;
}

function createButtonContainer() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const buttonsArray = [createHomeButton(), createMenuButton()];

    buttonsArray.forEach((button) => {
        eventListenerForButton(button, buttonsArray);
        buttonsContainer.appendChild(button);
    })

    return buttonsContainer;
}

function eventListenerForButton(button, buttonsArray) {
    button.addEventListener('click', () => {
        if (!button.classList.contains('active')) {
            buttonsArray.forEach((item) => {
                item === button ? item.classList.add('active') : item.classList.remove('active');
            })
        }
    })
}

function createHomepage() {
    const content = document.getElementById('content');
    
    const header = createHeader();
    content.appendChild(header);

    content.appendChild(createButtonContainer());
    
    content.appendChild(createInfoContainer());
    
};

export default createHomepage;