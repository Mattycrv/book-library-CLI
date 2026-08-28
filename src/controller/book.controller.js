import {
  addBook,
  updateBook,
  removeBook,
  listBooks,
  getBookById,
} from "../services/book-service.js";

import {
  showAddBook,
  showError,
  showListBooks,
  showRemovedBook,
  showUpdatedBook,
  showBookFound,
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

export function handleRemoveBook(id) {
  try {
    const removedBook = removeBook(id);
    showRemovedBook(removedBook);
    return removedBook;
  } catch (error) {
    showError(error.message);
  }
}

export function handleGetBookById(id) {
  const bookFound = getBookById(id);

  if (!bookFound) return showError("Livro não encontrado.");

  showBookFound(BookFound);

  return bookFound;
}
