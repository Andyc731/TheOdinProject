const container = document.querySelector('.container');
const next = document.querySelector('.next-button');
const previous = document.querySelector('.previous-button');
const IMAGEWIDTH = 484;

next.addEventListener('click', () => {
    const containerStyle = window.getComputedStyle(container);
    const containerLeft = containerStyle.getPropertyValue('left');
    console.log(calculateLeft(parseFloat(containerLeft.replace('px', "")))*IMAGEWIDTH);

    console.log(containerLeft);
    if (containerLeft <= '-1452px') {
        container.style.left = '0px';
        return;
    }

    const newLeftValue = calculateLeft(parseFloat(containerLeft.replace('px', "")))*IMAGEWIDTH;

    container.style.left = `${newLeftValue}px`;
})

previous.addEventListener('click', () => {
    const containerStyle = window.getComputedStyle(container);
    const containerLeft = containerStyle.getPropertyValue('left');

    console.log(containerLeft);
    if (containerLeft === '0px') {
        container.style.left = '-1452px';
        return;
    }
    const newLeftValue = parseInt(containerLeft.replace(/[^0-9^-]/g, "")) + IMAGEWIDTH;

    container.style.left = `${newLeftValue}px`;
})

function calculateLeft(currentLeft) {
    const numOfImages = 4;
    for (let i = 0; i > -numOfImages; i--) {
        if (currentLeft >= (i * IMAGEWIDTH)) return i-1;
    }

}