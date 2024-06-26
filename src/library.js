import { bookTileBuilder } from './book-builder';
import { Book } from './book';
import { initDropdown } from 'drop-down-init';
import { getDropDownOptions } from './drop-down';
import './style.css';
import './index.html';

const addBookButton = document.querySelector('.addBook');
const newBookPopup = document.querySelector('.bookPopup');
const submitButton = document.getElementById('submit');
const cancelButton = document.getElementById('cancel');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageCountInput = document.getElementById('pages');
const finishedBookInput = document.getElementById('read');
const bookshelf = document.getElementById('bookshelf');

export const myLibrary = [];

initDropdown(getDropDownOptions());

document.addEventListener('DOMContentLoaded', () => {
  refreshCards();
});

addBookButton.addEventListener('click', () => {
  newBookPopup.showModal();
});

cancelButton.addEventListener('click', () => {
  clearForm();
  newBookPopup.close();
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // avoid submitting form
  generateBook();
  newBookPopup.close();
  clearForm();
});

function clearForm() {
  titleInput.value = '';
  authorInput.value = '';
  pageCountInput.value = 1;
  finishedBookInput.checked = false;
}

// Create a new book and add it too the library.
function generateBook() {
  let read = finishedBookInput.checked ? true : false;

  let newBook = new Book(
    titleInput.value,
    authorInput.value,
    pageCountInput.value,
    read
  );

  addBookToLibrary(newBook);
  refreshCards();
}

function addBookToLibrary(newBook) {
  newBook.assignID();
  myLibrary.push(newBook);
  console.log(`${newBook.title} added to the library! ID: ${newBook.bookID}`);
  return `${newBook.title} added to the library! ID: ${newBook.bookID}`;
}

export function refreshCards() {
  clearCards();

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    book.bookID = i;
    bookTileBuilder(book, bookshelf);
  }
}

function clearCards() {
  bookshelf.innerHTML = '';
}

export function removeCard(cardID) {
  myLibrary.splice(cardID, 1);
  refreshCards();
}
