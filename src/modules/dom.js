function createPage() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (!tab.classList.contains('active')) {
                eventListenerForTab(tab);
            }
        })
})
}

function eventListenerForTab(tab) {
    const buttonsArray = document.querySelectorAll('.tab');

    buttonsArray.forEach((tab) => {
        if (tab !== this) {
            tab.classList.remove('active');
        }
    })

    tab.classList.add('active');
}

export default createPage;