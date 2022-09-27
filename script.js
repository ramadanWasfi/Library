const library = document.querySelector('#library');
const bookForm = document.querySelector('#bookForm');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookNumOfPages = document.querySelector('#book-numOfPages');
const bookReadState = document.querySelector('#book-readState');
const addBtn = document.querySelector('.add');
const cancelBtn = document.querySelector('.cancel');
const createBookBtn = document.querySelector('#createBookBtn');
let deleteBookBtns = document.querySelectorAll('.deleteBtn');
let readStateCheckboxes = document.querySelectorAll('.readState');

const myLibrary = [];
class Book {
    author;
    title;
    numOfPages;
    readState;
    constructor(author, title, numOfPages) {
        this.author = author;
        this.title = title;
        this.numOfPages = numOfPages;
        this.readState = false;
    }

    toggleReadState(newState) {
        this.readState = newState;
    }
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
    if (book.readState === true)
        readStateInput.checked = true;
    readStateInput.classList.add('readState');

    const readState = document.createElement('div');
    readState.classList.add('readStateContainer');
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

    const cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');

    const title = document.createElement('p');
    title.textContent = book.title;
    title.classList.add('title');

    const author = document.createElement('p');
    author.textContent = 'By ' + book.author;
    author.classList.add('author');

    const numOfPages = document.createElement('p');
    numOfPages.textContent = book.numOfPages + ' Pages';
    numOfPages.classList.add('numOfPages');

    cardContent.appendChild(title);
    cardContent.appendChild(author);
    cardContent.appendChild(numOfPages);

    myBook.appendChild(cardHeader);
    myBook.appendChild(cardContent);
    return myBook;
}

const appendBookCardtoLibraryDiv = (bookCard) => library.appendChild(bookCard);
const removeBookCardFromLibraryDiv = (bookCard) => library.removeChild(bookCard);

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
        let overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
})

cancelBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
    bookForm.reset();
})

const isBookDetailsAvailable = () => {
    return (bookAuthor.value !== '' && bookTitle.value !== '' && bookNumOfPages.value !== '');
}

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isBookDetailsAvailable()) {
        let newBook = new Book(bookAuthor.value, bookTitle.value, bookNumOfPages.value);
        if (bookReadState.checked) {
            newBook.readState = true;
        } else {
            newBook.readState = false;
        }
        addBookToLibrary(newBook);
        clearLibaryDiv();
        displayBooks();
        deleteBookBtns = document.querySelectorAll('.deleteBtn');
        deleteBookBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let bookHeader = e.target.parentElement;
                let book = bookHeader.parentElement;
                let bookIndex = book.getAttribute('book-index');
                removeBookFromLibrary(bookIndex);
                removeBookCardFromLibraryDiv(book);
            })
        })
    } else {
        return;
    }
    overlay.style.display = 'none';
    bookForm.style.display = 'none';
    bookForm.reset();
})

let book = new Book('James Clear', 'Atomic Habits', '285');
let book2 = new Book('James Nestor', 'Breath', '304');
let book3 = new Book('Carol Dweck', 'Mindset', '320');
let book4 = new Book('Rupi Kaur', 'Milk and Honey', '208');


addBookToLibrary(book);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);


displayBooks();

const removeBookFromLibrary = (bookIndex) => {
    if (myLibrary.length === 1)
        myLibrary.pop();
    else
        myLibrary.splice(bookIndex, 1);

}

deleteBookBtns = document.querySelectorAll('.deleteBtn');
console.log(deleteBookBtns)
deleteBookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let bookHeader = e.target.parentElement;
        let book = bookHeader.parentElement;
        let bookIndex = book.getAttribute('book-index');
        removeBookFromLibrary(bookIndex);
        removeBookCardFromLibraryDiv(book);
    })
})

readStateCheckboxes = document.querySelectorAll('.readState');
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