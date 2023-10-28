function tagsOnClick() {  
    const tags = document.querySelectorAll('.tag');
  
    tags.forEach((tag) => {
        tag.addEventListener('click', () => {
            setActiveOnClick(tag);
        })
    })
}

function setActiveOnClick(currentTag) {
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag) => {
        if (tag !== this) tag.classList.remove('active');
    })
    currentTag.classList.add('active');
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

    dialogButtonOnClick();
}

function dialogButtonOnClick() {
    const sidebar = document.querySelector('.sidebar');
    const addTag = document.querySelector('.addTag');
    const addTodoButton = document.querySelector('.addTagButton');
    addTodoButton.addEventListener('click', () => {
        const name = document.getElementById('tag-name').value;
        sidebar.insertBefore(createTag(name), addTag);
        tagsOnClick();

        document.getElementById('addTagDialog').close();
        document.getElementById('tagForm').reset();
    })
}

function tagToForm(tag) {
    const form = document.getElementById('todoForm');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const addButton = document.querySelector('.addTodoButton');

    label.setAttribute('for', tag);
    label.textContent = tag;

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', tag);
    input.setAttribute('value', tag);

    form.insertBefore(input, addButton);
    form.insertBefore(label, addButton);
}

function createTag(name) {
    const div = document.createElement('div');
    div.textContent = name;
    div.classList.add(name, 'tag');

    tagToForm(name);
    return div;
}

function createSidebar() {
    tagsOnClick();
    showDialogOnClick(document.querySelector('.addTag'), 'addTagDialog');
}

export default createSidebar;