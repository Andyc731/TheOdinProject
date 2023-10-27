import createTabs from "./tab";
import createTags from "./tag";

function createContent() {
    const contentContainer = document.querySelector('.content');
    contentContainer.appendChild(createAddTodo());
    
    return contentContainer;
}

function createAddTodo() {
    const addTodo = document.createElement('div');
    addTodo.classList.add('addTodo');
    addTodo.textContent = '+ Add Todo';
    
    showDialogOnClick(addTodo, 'addTodoDialog');
    
    return addTodo;
}

function dialogButtonEventListener() {
    const addTodoButton = document.querySelector('.addTodoButton');
    addTodoButton.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        if (title === '' || dueDate === '') return;
        
        const todo = createTodo(
            title,
            description,
            dueDate,
            priority
        )

        loadTodo(todo);
        document.getElementById('addTodoDialog').close();
        document.getElementById('todoForm').reset();
    })
}

function dueDateClassArray(todoDate) {
    const today = new Date();
    const week = new Date(today)
    week.setDate(week.getDate() + 7);
    const month = new Date(today);
    month.setDate(month.getDate() + 30);

    const classArray = []

    if (todoDate < dateToString(today)) return;
    if (todoDate === dateToString(today)) classArray.push('today');
    if (todoDate < dateToString(week)) classArray.push('week');
    if (todoDate < dateToString(month)) classArray.push('month');

    return classArray;
    
}

function dateToString(date) {
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
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

function createTodo(title, description, dueDate, priority, tags = []) {
    return {title, description, dueDate, priority, tags}
}

function loadTodo(todo) {
    const content = document.querySelector('.content');
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    dueDateClassArray(todo.dueDate).forEach((item) => {
        todoDiv.classList.add(item);
    })

    todoDiv.textContent = todo.title;
    
    content.insertBefore(todoDiv, content.lastChild);
}

function createPage() {
    createTabs();
    createContent();
    createTags();
}

export default createPage;