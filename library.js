const addBookButton = document.querySelector(".addBook");
const newBookPopup = document.querySelector(".bookPopup");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

const title = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("pages");
const finishedBookInput = document.getElementById("read");
const bookshelf = document.getElementById("bookshelf");

const myLibrary = [];





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

// Create a new book and add it too the library.
function generateBook() {

    let read = (finishedBookInput.checked) ? true : false;
    let newBook = new Book(title.value, authorInput.value, pageCountInput.value, read);

    myLibrary.push(newBook);
    refreshCards();
}

function refreshCards() {

    clearCards();

    myLibrary.forEach((book) => {

        bookbuilder(book.title, book.author, book.pages, book.hasRead);
    })

}

function resetLibrary() {
    myLibrary.splice(0, myLibrary.length)
    refreshCards();
}

function clearCards() {
    bookshelf.innerHTML = "";
}

function bookbuilder(titleInput, authorInput, pageCount, hasRead) {
    let div = document.createElement("div")
    div.classList.add("book");

    let title = document.createElement("p")
    title.classList.add("title");
    title.textContent = titleInput;

    let author = document.createElement("p")
    author.classList.add("author");
    author.textContent = authorInput;

    let pages = document.createElement("p")
    pages.classList.add("pageCount");
    pages.textContent = pageCount;

    // Use as a selector to apply a checkmark 
    if (hasRead) {
        div.classList.add("complete");
    }

    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages);

    bookshelf.appendChild(div);

}


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



