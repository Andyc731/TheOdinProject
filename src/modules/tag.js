function createTags() {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach((tag) => {
        tag.addEventListener('click', () => {
            tagSetActive(tag, tags);
        })
    })
}

function tagSetActive(currentTag, tagsArray) {
    tagsArray.forEach((tag) => {
        if (tag !== this) tag.classList.remove('active');
    })
    currentTag.classList.add('active');
}

export default createTags;