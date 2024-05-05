import { bookTileBuilder } from "./book-builder";
import "../style.css";

const addBookButton = document.querySelector(".addBook");
const newBookPopup = document.querySelector(".bookPopup");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("pages");
const finishedBookInput = document.getElementById("read");
const bookshelf = document.getElementById("bookshelf");

export const myLibrary = [];


document.addEventListener("DOMContentLoaded", () => {
    resetLibrary();
}, { once: true });

document.addEventListener("DOMContentLoaded", () => {
    dummyBooks();
    refreshCards();
});


addBookButton.addEventListener("click", () => {
    newBookPopup.showModal();
});

cancelButton.addEventListener("click", () => {
    clearForm();
    newBookPopup.close();
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault(); // avoid submitting form

    generateBook();
    newBookPopup.close();
    clearForm();
});

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pageCountInput.value = 1;
    finishedBookInput.checked = false;
}

// Create a new book and add it too the library.
function generateBook() {

    let read = (finishedBookInput.checked) ? true : false;
    let newBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, read);

    addBookToLibrary(newBook);
    refreshCards();
}

function addBookToLibrary(newBook) {
    newBook.assignID();
    myLibrary.push(newBook);
    console.log(`${newBook.title} added to the library! ID: ${newBook.bookID}`);
    return `${newBook.title} added to the library! ID: ${newBook.bookID}`;
}

function refreshCards() {

    clearCards();

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        book.bookID = i;
        bookTileBuilder(book, bookshelf);
    }

}

function resetLibrary() {
    myLibrary.splice(0, myLibrary.length)
    refreshCards();
}

function clearCards() {
    bookshelf.innerHTML = "";

}

export function removeCard(cardID) {
    myLibrary.splice(cardID, 1);
    refreshCards();
}



function dummyBooks() {
    // Add some sample books to start
    myLibrary.push(new Book('The Poppy War', 'RF Kuang', 452, true));
    myLibrary.push(new Book('The Dragon Republic', 'RF Kuang', 618, false, 1));
    myLibrary.push(new Book('The Burning God', 'RF Kuang', 705, false, 2));


}


myLibrary.forEach((book) => {
    console.log(book.readBook());
})



