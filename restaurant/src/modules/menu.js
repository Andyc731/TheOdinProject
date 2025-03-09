function createMenuContainer() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuContainer.appendChild(createMenuItem('bibimbap'));
    menuContainer.appendChild(createMenuItem('bossam'));
    menuContainer.appendChild(createMenuItem('bulgogi'));
    menuContainer.appendChild(createMenuItem('gopchang'));
    menuContainer.appendChild(createMenuItem('naengmyeon'));
    menuContainer.appendChild(createMenuItem('kimchi'));

    return menuContainer;
}

function createMenuItem(name) {
    const menuItem = document.createElement('img');
    menuItem.src = `../images/${name}.png`;

    return menuItem;
}

export default createMenuContainer;