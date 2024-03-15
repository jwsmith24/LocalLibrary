const addBookButton = document.querySelector(".addBook");
const newBookPopup = document.querySelector(".bookPopup");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

const title = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("pages");
const finishedBookInput = document.getElementById("read");





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
    title.value = "";
    authorInput.value = "";
    pageCountInput.value = 1;
    finishedBookInput.checked = false;
}


function generateBook() {


    let read = (finishedBookInput.checked) ? true : false;
    let newBook = new Book(title.value, authorInput.value, pageCountInput.value, read);


}


const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.readBook = function () {

    if (this.hasRead) {
        return `You've already read ${this.title}`;
    }

    this.hasRead = true;
    return `You've finished ${this.title}`;
}

function addBookToLibrary(newBook) {

    myLibrary.push(newBook);
    return `${newBook.title} added to the library!`;
}

// Add some sample books to start
myLibrary.push(new Book('The Poppy War', 'RF Kuang', 452, true));
myLibrary.push(new Book('The Dragon Republic', 'RF Kuang', 618, false));
myLibrary.push(new Book('The Burning God', 'RF Kuang', 705, false));


myLibrary.forEach((book) => {
    console.log(book.readBook());
})



