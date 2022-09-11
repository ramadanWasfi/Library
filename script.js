const library = document.querySelector('.library');
const bookForm = document.querySelector('#bookForm');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookNumOfPages = document.querySelector('#book-numOfPages');
const bookReadState = document.querySelector('#book-readState');

const myLibrary = [];

function Book(author, title, numOfPages) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.readState = false;
}

const addBookToLibrary = (newBook) => {
    myLibrary.push(newBook);
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

const appendBookCardtoLibraryDiv = (bookCard) => library.appendChild(bookCard);

const clearLibaryDiv = () => {
    while (library.firstChild) {
        library.removeChild(library.lastChild);
      }
}


const displayBooks = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = createBookCard(myLibrary[i]);
        appendBookCardtoLibraryDiv(bookCard);
    }
}

let book1 = new Book('Ramadan', 'Slow Down', 50);
let book2 = new Book('Ramadan', 'Slow Down', 50);
let book3 = new Book('Ramadan', 'Slow Down', 50);



console.log(book1);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks();
console.log(myLibrary);


const createBookBtn = document.querySelector('#createBookBtn');
createBookBtn.addEventListener('click', () => {
    if (bookForm.style.display === 'none') {
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
})


const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', () => {
    bookForm.style.display = 'none';
    bookForm.reset();
})

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    let newBook = new Book(bookAuthor.value ,bookTitle.value ,bookNumOfPages.value);
    if(bookReadState.checked) {
        newBook.readState = true;
    } else {
        newBook.readState = false;
    }
    addBookToLibrary(newBook);
    clearLibaryDiv();
    displayBooks();
})