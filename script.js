const library = document.querySelector('.library');
const bookForm = document.querySelector('#bookForm');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookNumOfPages = document.querySelector('#book-numOfPages');
const bookReadState = document.querySelector('#book-readState');
const deleteBookBtns = document.querySelectorAll('.deleteBtn');
const addBtn = document.querySelector('.add');
const cancelBtn = document.querySelector('.cancel');
const createBookBtn = document.querySelector('#createBookBtn');

const myLibrary = [];

function Book(author, title, numOfPages) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.readState = false;
}

Book.prototype.toggleReadState = function (newState) {
    this.readState = newState;
}

const addBookToLibrary = (newBook) => {
    myLibrary.push(newBook);
}

const createBookCard = (book) => {
    const myBook = document.createElement('div');
    myBook.classList.add('book');

    const readStateLabel = document.createElement('label');
    readStateLabel.textContent = 'Finish reading';

    const readStateInput = document.createElement('input');
    readStateInput.type = 'checkbox';
    readStateInput.classList.add('readState');

    const readState = document.createElement('div');
    readState.appendChild(readStateInput);
    readState.appendChild(readStateLabel);

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteBtn');

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
        bookCard.setAttribute('book-index', i);
        appendBookCardtoLibraryDiv(bookCard);
    }
}

createBookBtn.addEventListener('click', () => {
    if (bookForm.style.display === 'none') {
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
})

cancelBtn.addEventListener('click', () => {
    bookForm.style.display = 'none';
    bookForm.reset();
})

addBtn.addEventListener('click', () => {
    let newBook = new Book(bookAuthor.value, bookTitle.value, bookNumOfPages.value);
    if (bookReadState.checked) {
        newBook.readState = true;
    } else {
        newBook.readState = false;
    }
    addBookToLibrary(newBook);
    clearLibaryDiv();
    displayBooks();
})

const removeBookFromLibrary = (bookIndex) => {
    myLibrary.splice(bookIndex, 1);
}

deleteBookBtns.forEach(btn => {
    btn.addEventListener('click', (btn) => {
        let bookHeader = btn.target.parentElement;
        let book = bookHeader.parentElement;
        let bookIndex = book.getAttribute('book-index');
        removeBookFromLibrary(bookIndex);
    })
})

const readStateCheckboxes = document.querySelectorAll('.readState');
console.log(readStateCheckboxes);
readStateCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (checkBox) => {
        let checkBoxContainer = checkBox.target.parentElement;
        let bookHeader = checkBoxContainer.parentElement;
        let book = bookHeader.parentElement;
        let bookIndex = book.getAttribute('book-index');
        if (checkBox.currentTarget.checked) {
            myLibrary[bookIndex].toggleReadState(true);
        } else {
            myLibrary[bookIndex].toggleReadState(false);
        }
    })
})


let book1 = new Book('Ramadan', 'Slow Down', 50);
let book2 = new Book('ahmed', 'Slow Down', 50);
let book3 = new Book('sad', 'Slow Down', 50);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks();