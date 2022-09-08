let myLibrary = [];

function Book (author, title, numOfPages) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
}

const addBookToLibrary = (newBook) => {
    myLibrary[myLibrary.length] = newBook;
}

let book1 = new Book('Ramadan', 'Slow Down', 50);

console.log(book1);

addBookToLibrary(book1);

console.log(myLibrary);