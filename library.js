const addBookButton = document.querySelector(".addBook");
const newBookPopup = document.querySelector(".bookPopup");
const submitButton = document.getElementById("submit");
const cancelButton = document.getElementById("cancel");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("pages");
const finishedBookInput = document.getElementById("read");
const bookshelf = document.getElementById("bookshelf");

const myLibrary = [];


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
    title.value = "";
    authorInput.value = "";
    pageCountInput.value = 1;
    finishedBookInput.checked = false;
}

// Create a new book and add it too the library.
function generateBook() {

    let read = (finishedBookInput.checked) ? true : false;
    let newBook = new Book(title.value, authorInput.value, pageCountInput.value, read);

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

function bookbuilder(bookTitle, authorInput, pageCount, hasRead) {
    let div = document.createElement("div")
    div.classList.add("book");
    div.classList.add("check");

    let title = document.createElement("p")
    title.classList.add("title");
    title.textContent = bookTitle;

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


class Book {
    constructor(title, author, pages, hasRead, bookID = -1) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
        this.bookID = bookID;
    }

    readBook() {

        if (this.hasRead) {
            return `You've already read ${this.title} ID: ${this.bookID}`;
        }

        this.hasRead = true;
        return `You've finished ${this.title} ID: ${this.bookID}`;
    }

    /** If book doesn't have an id, assign one. */
    assignID() {
        let newID = myLibrary.length;
        this.bookID = (this.bookID === -1) ? this.bookID = newID : this.book
    }
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



