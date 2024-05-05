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

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        book.bookID = i;
        bookBuilder(book);
    }

}

function resetLibrary() {
    myLibrary.splice(0, myLibrary.length)
    refreshCards();
}

function clearCards() {
    bookshelf.innerHTML = "";

}

function removeCard(cardID) {
    myLibrary.splice(cardID, 1);
    refreshCards();
}

function bookBuilder(book) {

    let div = document.createElement("div");
    div.classList.add("book");
    div.classList.add("check");
    // allow easy lookup
    div.id = book.bookID;
    div.tabIndex = 0; // make books tabbable in the order they're added

    let title = document.createElement("p")
    title.classList.add("title");
    title.textContent = book.title;

    let author = document.createElement("p")
    author.classList.add("author");
    author.textContent = book.author;

    let pages = document.createElement("p")
    pages.classList.add("pageCount");
    pages.textContent = book.pages;

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.id = book.bookID;

    remove.addEventListener('click', (e) => {
        removeCard(e.target.id);
    })

    // Use as a selector to apply a check mark 
    if (book.hasRead) {
        div.classList.add("complete");
    }

    // Add event listener for finishing a book

    div.addEventListener('click', (e) => {

        let target = e.currentTarget;

        if (target.classList.contains("complete")) {
            target.classList.remove("complete");
            return;
        }

        e.currentTarget.classList.add("complete");


    })

    div.appendChild(remove);
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages);

    bookshelf.appendChild(div);

}


class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
        this.bookID = this.assignID();
    }

    readBook() {

        if (this.hasRead) {
            return `You've already read ${this.title} ID: ${this.bookID}`;
        }

        this.hasRead = true;
        refreshCards();
        return `You've finished ${this.title} ID: ${this.bookID}`;
    }

    /** If book doesn't have an id, assign one. */
    assignID() {
        return myLibrary.length;

    }

    toggleComplete() {
        this.hasRead = !this.hasRead;
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



