let myLibrary = [];

function Book (author, title, numOfPages) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
}

const addBookToLibrary = (newBook) => {
    for (book in myLibrary) {
        if(book.title === newBook.title)
            alert('There is a book with the name you try to add');
            return;
    }
    myLibrary[myLibrary.length] = newBook;
}

let book1 = new Book('Ramadan', 'Slow Down', 50);
let book2 = new Book('Ramadan', 'Slow Down', 50);
let book3 = new Book('Ramadan', 'Slow Down', 50);


console.log(book1);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


console.log(myLibrary);