import { searchByAuthor, searchByTitle } from "../services/search-service.js";
import { loadBooks } from "../services/storage.service.js";
import { showError } from "../views/book-view.js";
import { showSearchBook } from "../views/search.view.js";

export function handleSearchByTitle(title) {
  try {
    const bookFoundByTitle = searchByTitle(title);
    showSearchBook(bookFoundByTitle);
    return bookFoundByTitle;
  } catch (error) {
    showError(error.message);
  }
}

export function handleSearchByAuthor(author) {
  try {
    const bookFoundByAuthor = searchByAuthor(author);
    showSearchBook(bookFoundByAuthor);
    return bookFoundByAuthor;
  } catch (error) {
    showError(error.message);
  }
}

export function handleSearchBooks(term) {}
