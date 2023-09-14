const container = document.querySelector(".container");


const myLibrary = [];
const dialog = document.querySelector("#dialog");
const openForm = document.querySelector(".openForm");
const closeForm = document.querySelector(".closeForm");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form-container");

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

    if (title === "" || author === "" || pages === "") {
        return;
    }

    const book = new Book(title, author, pages, read);

    addBookToLibrary(book);

    displayBook();

    form.reset();

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

myLibrary.push(blah2);

function displayBook() {
        
    const newDiv = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const read = document.createElement("p")


    title.textContent = myLibrary[myLibrary.length - 1].title;
    author.textContent = myLibrary[myLibrary.length - 1].author;
    pages.textContent = myLibrary[myLibrary.length - 1].pages;
    read.textContent = myLibrary[myLibrary.length - 1].read;


    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(read);

    
    container.appendChild(newDiv);

}

for (let i = 0; i < myLibrary.length; i++) {
    displayBook();
}


console.log(myLibrary);
console.log(myLibrary[myLibrary.length - 1]);