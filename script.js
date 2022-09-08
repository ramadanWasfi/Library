let myLibrary = [];

function Book (author, title, numOfPages) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
}

const addBookToLibrary = (newBook) => {
    myLibrary[myLibrary.length] = newBook;
}


const createBookCard = (book) => {
    const myBook = document.createElement('div');
    myBook.classList.add('book');

    const readStateLabel = document.createElement('label');
    readStateLabel.textContent = 'read';

    const readStateInput = document.createElement('input');
    readStateInput.type = 'checkbox';
    readStateInput.id = 'readState';

    const readState = document.createElement('div');
    readState.appendChild(readStateInput);
    readState.appendChild(readStateLabel);

    

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'X';

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');

    cardHeader.appendChild(readState);
    cardHeader.appendChild(deleteBtn);


    const title = document.createElement('p');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const numOfPages = document.createElement('p');
    numOfPages.textContent = book.numOfPages;

    myBook.appendChild(cardHeader);
    myBook.appendChild(title);
    myBook.appendChild(author);
    myBook.appendChild(numOfPages);
    return myBook;
}

const appendBookCardtoLibraryDiv = (bookCard) => {
    const library = document.querySelector('.library');
    library.appendChild(bookCard);
}


let book1 = new Book('Ramadan', 'Slow Down', 50);
let book2 = new Book('Ramadan', 'Slow Down', 50);
let book3 = new Book('Ramadan', 'Slow Down', 50);

let card = createBookCard(book1);
appendBookCardtoLibraryDiv(card);

let card2 = createBookCard(book1);
appendBookCardtoLibraryDiv(card2);

let card3 = createBookCard(book1);
appendBookCardtoLibraryDiv(card3);

let card4 = createBookCard(book1);
appendBookCardtoLibraryDiv(card4);

let card5 = createBookCard(book1);
appendBookCardtoLibraryDiv(card5);

let card6 = createBookCard(book1);
appendBookCardtoLibraryDiv(card6);

console.log(book1);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


console.log(myLibrary);