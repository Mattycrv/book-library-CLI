import {
  addBook,
  updateBook,
  removeBook,
  listBooks,
} from "../services/book-service.js";

import {
  showAddBook,
  showError,
  showListBooks,
  showUpdatedBook,
} from "../views/book-view.js";

export function handleAddBook(title, author, year) {
  try {
    const newBook = addBook(title, author, year);

    showAddBook(newBook);

    return newBook;
  } catch (error) {
    showError(error.message);
  }
}

export function handleListBook() {
  const books = listBooks();
  showListBooks(books);
  return books;
}

export function handleUpdateBook(id, updatedData) {
  try {
    const updatedBook = updateBook(id, updatedData);
    showUpdatedBook(updatedBook);
    return updatedBook;
  } catch (error) {
    showError(error.message);
  }
}
