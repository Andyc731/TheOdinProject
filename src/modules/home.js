function createHeader() {
    const header = document.createElement('h1');
    header.textContent = "Chung's HanShik";

    return header;
}

function createInfoContainer() {
    const container = document.createElement('div');
    container.classList.add('container');

    container.appendChild(createIntro());

    return container;
}

function createIntro() {
    const intro = document.createElement('div');
    intro.classList.add('intro');

    intro.textContent = "We koreans. We cook delicious korean food. Yay koreans. Yes Bibimbap. Yes Gukbap, Yes Kimchi. Food is love"

    return intro;
}

function createHours() {

}

function createLocation() {

}

function createHomepage() {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);

    content.appendChild(createInfoContainer());

};

export default createHomepage;