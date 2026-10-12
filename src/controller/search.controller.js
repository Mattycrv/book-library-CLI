import { searchByTitle } from "../services/search-service.js";
import { loadBooks } from "../services/storage.service.js";
import { showError } from "../views/book-view.js";
import { showSearchByTitle } from "../views/search.view.js";

export function handleSearchByTitle(title) {
  try {
    const bookFoundByTitle = searchByTitle(title);
    showSearchByTitle(bookFoundByTitle);
    return bookFoundByTitle;
  } catch (error) {
    showError(error.message);
  }
}
