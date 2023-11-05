const container = document.querySelector('.container');
const next = document.querySelector('.next-button');
const previous = document.querySelector('.previous-button');
const dotsArray = document.querySelectorAll('.dot');
const IMAGEWIDTH = 484;
const NUMOFIMAGES = 4;

next.addEventListener('click', () => {
    const containerStyle = window.getComputedStyle(container);
    const containerLeft = parseFloat(containerStyle.getPropertyValue('left').replace('px', ''));

    if (calculateLeft(containerLeft)) {
        if (containerLeft <= -1452) {
            container.style.left = '0px';
            setActive(dotsArray[0]);
            return;
        }
        const newLeftValue = containerLeft - IMAGEWIDTH;
        container.style.left = `${newLeftValue}px`;
        setActive(dotsArray[calculateIndex(containerLeft)]);
    }
})

previous.addEventListener('click', () => {
    const containerStyle = window.getComputedStyle(container);
    const containerLeft = containerStyle.getPropertyValue('left');

    if (containerLeft === '0px') {
        container.style.left = '-1452px';
        return;
    }
    const newLeftValue = parseInt(containerLeft.replace(/[^0-9^-]/g, "")) + IMAGEWIDTH;

    container.style.left = `${newLeftValue}px`;

})

function calculateLeft(currentLeft) {
    for (let i = 0; i > -NUMOFIMAGES; i--) {
        if (currentLeft === (i * IMAGEWIDTH)) return true;
    }
    return false;

}

dotsArray.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        setActive(dot);
        container.style.left = `${-index * IMAGEWIDTH}px`
    })
})

function setActive(currentDot) {
    dotsArray.forEach((dot) => {
        currentDot !== dot ? dot.classList.remove('active') : dot.classList.add('active');

    })
}

function calculateIndex(currentLeft) {
    for (let i = 0; i < NUMOFIMAGES; i++) {
        if (currentLeft > (-i *IMAGEWIDTH)) return i;
    }
}