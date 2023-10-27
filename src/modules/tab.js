function createTabs() {
    const home = document.querySelector('.tab.home');
    const today = document.querySelector('.tab.today');
    const week = document.querySelector('.tab.week');
    const month = document.querySelector('.tab.month');

    home.addEventListener('click', () => {
        if (!home.classList.contains('active')) {
            eventListenerForTab(home);
            displayTodo('todo');
        }
    })

    today.addEventListener('click', () => {
        if (!today.classList.contains('active')) {
            eventListenerForTab(today);
            displayTodo('today')
        }
    })

    week.addEventListener('click', () => {
        if (!week.classList.contains('active')) {
            eventListenerForTab(week);
            displayTodo('week')
        }
    })

    month.addEventListener('click', () => {
        if (!month.classList.contains('active')) {
            eventListenerForTab(month);
            displayTodo('month');
        }
    })
}

function eventListenerForTab(currentTab) {
    const tabsArray = document.querySelectorAll('.tab');
    
    tabsArray.forEach((tab) => {
        if (tab !== this) {
            tab.classList.remove('active');
        }
    })
    
    currentTab.classList.add('active');

}

function displayTodo(tabClass) {
    const todoArray = document.querySelectorAll('.todo');

    todoArray.forEach((todo) => {
        todo.classList.contains(tabClass) ? todo.style.display = 'block' : todo.style.display = 'none';
    })
}

export default createTabs;