const container = document.querySelector(".container");


const myLibrary = [];
const dialog = document.querySelector("#dialog");
const openForm = document.querySelector(".openForm");
const closeForm = document.querySelector(".closeForm");
const submit = document.querySelector("#submit");

openForm.addEventListener("click", () => {
    dialog.showModal();
})

closeForm.addEventListener("click", () => {
    dialog.close();
})

submit.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;


    const book = new Book(title, author, pages, read);
    console.log(book);

})

function handleClick(cb) {
    if (cb.value === "true") {
        cb.value = "false";
    } else {
        cb.value = "true";
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const blah2 = new Book(1, 2, 3, 4);
const blah3 = new Book(2, 3, 4, 5);

myLibrary.push(blah2);
myLibrary.push(blah3);

for (let i = 0; i < myLibrary.length; i++) {
    
    const newDiv = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const read = document.createElement("p")


    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    read.textContent = myLibrary[i].read;


    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(read);

    
    container.appendChild(newDiv);
}


console.log(myLibrary);