import { removeCard } from './library';

// Creates a tile html element in the bookshelf
export function bookTileBuilder(book, bookshelf) {
  let div = document.createElement('div');
  div.classList.add('book');
  div.classList.add('check');
  // allow easy lookup
  div.id = book.bookID;
  div.tabIndex = 0; // make books tabbable in the order they're added

  let title = document.createElement('p');
  title.classList.add('title');
  title.textContent = book.title;

  let author = document.createElement('p');
  author.classList.add('author');
  author.textContent = book.author;

  let pages = document.createElement('p');
  pages.classList.add('pageCount');
  pages.textContent = book.pages;

  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.id = book.bookID;

  remove.addEventListener('click', (e) => {
    removeCard(e.target.id);
  });

  // Use as a selector to apply a check mark
  if (book.hasRead) {
    div.classList.add('complete');
  }

  // Add event listener for finishing a book

  div.addEventListener('click', (e) => {
    let target = e.currentTarget;

    if (target.classList.contains('complete')) {
      target.classList.remove('complete');
      return;
    }

    e.currentTarget.classList.add('complete');
  });

  div.appendChild(remove);
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);

  bookshelf.appendChild(div);
}
