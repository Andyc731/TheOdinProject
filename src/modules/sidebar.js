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

function createTag(name) {
    const div = document.createElement('div');
    div.textContent = name;
    div.classList.add(name, 'tag');

    return div;
}

function tag() {
    tagsOnClick();
    showDialogOnClick(document.querySelector('.addTag'), 'addTagDialog');
}

export default tag;