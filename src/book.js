
import { myLibrary } from "./library";

export class Book {
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