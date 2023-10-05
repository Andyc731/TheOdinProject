function createMenuContainer() {
    const menuContainer = document.createElement('div');

    menuContainer.appendChild(createMenuItem('bibimbap'));

    return menuContainer;
}

function createMenuItem(name) {
    const menuItem = document.createElement('img');
    menuItem.src = `../images/${name}.png`;

    return menuItem;
}

export default createMenuContainer;