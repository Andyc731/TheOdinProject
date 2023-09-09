const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const blah = new Book(1, 2, 3, 4);
const blah2 = new Book(2, 3, 4, 5);

addBookToLibrary(blah);
addBookToLibrary(blah2);
console.log(myLibrary);