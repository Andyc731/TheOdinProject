function createIntro() {
    const intro = document.createElement('div');
    intro.classList.add('intro');
    
    intro.textContent = "We koreans. We cook delicious korean food. Yay koreans. Yes Bibimbap. Yes Gukbap, Yes Samgyeopsal, Yes Kimchi. Food is love"
    
    return intro;
}

function createHeader(text, headerClass) {
    const header = document.createElement('div');
    header.classList.add(headerClass);
    header.textContent = text;

    return header;
}

function createHours() {
    const hourContainer = document.createElement('div');
    hourContainer.classList.add('hours');

    hourContainer.appendChild(createHeader('Hours', 'hour-header'));
    
    const text = "Monday-Friday 9am-9pm. Saturday 11am-8pm. Sunday 11am-8pm".split(".");
    text.forEach((item) => {
        hourContainer.appendChild(createText(item));
    })
    
    return hourContainer;
}

function createLocation() {
    const location = document.createElement('div');
    location.classList.add('location');

    location.appendChild(createHeader('Location', 'location-header'));
    

    location.appendChild(createText('122 Blah street, NW, Calgary, AB'));

    return location;
}

function createText(text) {
    const textContainer = document.createElement('p');
    textContainer.textContent = text;

    return textContainer;
}

function createHomeContainer() {
    const container = document.createElement('div');
    container.classList.add('home-container');
    
    container.appendChild(createIntro());
    container.appendChild(createHours());
    container.appendChild(createLocation());

    return container;
}

export default createHomeContainer;