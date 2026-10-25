import {
  searchBooks,
  searchByAuthor,
  searchByTitle,
} from "../services/search-service.js";
import { showError } from "../views/book-view.js";
import { showSearchBook } from "../views/search.view.js";

export function handleSearchByTitle(title) {
  try {
    const booksFoundByTitle = searchByTitle(title);
    showSearchBook(booksFoundByTitle);
    return booksFoundByTitle;
  } catch (error) {
    showError(error.message);
  }
}

export function handleSearchByAuthor(author) {
  try {
    const booksFoundByAuthor = searchByAuthor(author);
    showSearchBook(booksFoundByAuthor);
    return booksFoundByAuthor;
  } catch (error) {
    showError(error.message);
  }
}

export function handleSearchBooks(term) {
  try {
    const booksFoundByTerm = searchBooks(term);
    showSearchBook(booksFoundByTerm);
    return booksFoundByTerm;
  } catch (error) {
    showError(error.message);
  }
}
