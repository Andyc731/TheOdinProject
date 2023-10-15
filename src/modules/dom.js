function createPage() {
    const tabs = document.querySelectorAll('.tab');
    const addTodoButton = document.querySelector('.addTodoButton');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (!tab.classList.contains('active')) {
                eventListenerForTab(tab);
            }
        })
    })

    const addTodoDialog = document.querySelector('#addTodoDialog');
    const addTodo = document.querySelector('.addTodo');
    addTodo.addEventListener('click', () => {
        addTodoDialog.showModal();
    })

    addTodoDialog.addEventListener('click', e => {
        const dialogDimensions = addTodoDialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            addTodoDialog.close();
        }
    })

    addTodoButton.addEventListener('click', () => {
        console.log(document.getElementById('dueDate').value);
        const todo = createTodo(
            document.getElementById('title').value,
            document.getElementById('description').value,
            document.getElementById('dueDate').value,
        )
        loadTodo(todo);
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

function createTodo(title, description, dueDate, priority, tags = []) {
    return {title, description, dueDate, priority, tags}
}

function loadTodo(todo) {
    const content = document.querySelector('.content');
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.textContent = todo.title;

    content.appendChild(todoDiv);


}

export default createPage;