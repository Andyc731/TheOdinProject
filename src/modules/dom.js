function createContent() {
    const contentContainer = document.querySelector('.content');
    contentContainer.appendChild(createAddTodo());
    
    return contentContainer;
}

function createTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (!tab.classList.contains('active')) {
                eventListenerForTab(tab);
            }
        })
    })
}

function createAddTodo() {
    const addTodo = document.createElement('div');
    addTodo.classList.add('todo', 'addTodo');
    addTodo.textContent = '+ Add Todo';
    
    showDialogOnClick(addTodo, 'addTodoDialog');
    
    return addTodo;
}

function dialogButtonEventListener() {
    const addTodoButton = document.querySelector('.addTodoButton');
    addTodoButton.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        
        if (title === '') return;
        
        const todo = createTodo(
            title,
            document.getElementById('description').value,
            document.getElementById('dueDate').value,
        )

        loadTodo(todo);
        addTodoDialog.close();
        console.log(document.getElementById('dueDate').value === '');
    })   
}

function showDialogOnClick(div, dialogID) {
    const dialog = document.getElementById(dialogID);
    div.addEventListener('click', () => {
    dialog.showModal();
    })

    dialog.addEventListener('click', e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
        ) {
            dialog.close();
        }
    })
    
    dialogButtonEventListener();
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
    
    content.insertBefore(todoDiv, content.lastChild);
    console.log(content.outerHTML);
}

function createPage() {
    createTabs();
    createContent();
}

export default createPage;