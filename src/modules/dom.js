function createDiv(divClass) {
    const blah = document.createElement('div');
    blah.classList.add(divClass);

    return blah;
}

function createPage() {
    const page = document.getElementById('page');
    page.appendChild(createDiv('header'));
    page.appendChild(createDiv('sidebar'));
    page.appendChild(createDiv('content'));

    console.log('blah');

    return page;
}

export default createPage;