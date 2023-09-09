const container = document.querySelector(".container");


const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = prompt("Enter title");
    let author = prompt("Enter author")
    let pages = prompt("Enter pages");
    let read = prompt("Enter if you have read the book (yes or no)");

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const blah2 = new Book(1, 2, 3, 4);
const blah3 = new Book(2, 3, 4, 5);

myLibrary.push(blah2);
myLibrary.push(blah3);


addBookToLibrary();

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