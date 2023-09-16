const container = document.querySelector(".container");
const myLibrary = [];
const dialog = document.querySelector("#dialog");
const openForm = document.querySelector(".openForm");
const closeForm = document.querySelector(".closeForm");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form-container");
const button = document.querySelector(".openForm");

openForm.addEventListener("click", () => {
    dialog.showModal();
})

closeForm.addEventListener("click", () => {
    dialog.close();
})

submit.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    if (title.value === "" || author.value === "" || pages.value === "") {
        return;
    }

    const book = new Book(title.value, author.value, pages.value, read.value);

    addBookToLibrary(book);

    displayBook();

    form.reset();

    read.value = "false";

    dialog.close();
})

function handleClick(cb) {
    cb.value === "false" ? cb.value = "true" : cb.value = "false";
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


function displayBook() {
        
    const newDiv = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const read = document.createElement("p")

    title.classList.add("bookTitle");

    title.textContent = myLibrary[myLibrary.length - 1].title;
    author.textContent = "Author: " + myLibrary[myLibrary.length - 1].author;
    pages.textContent = "Number of Pages: " + myLibrary[myLibrary.length - 1].pages;
    read.textContent = "Finished Reading: " + myLibrary[myLibrary.length - 1].read;

    newDiv.classList.add("card");
    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(read);
    newDiv.style.backgroundColor =  "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";

    
    container.appendChild(newDiv);
    container.appendChild(button);

}

function randomNum() {
    return 175 + Math.floor(Math.random() * 70);
}

for (let i = 0; i < myLibrary.length; i++) {
    displayBook();
}

console.log(myLibrary);
console.log(myLibrary[myLibrary.length - 1]);