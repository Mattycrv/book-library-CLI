import { searchByTitle } from "../services/search-service";
import { loadBooks } from "../services/storage.service.js";
import { showError } from "../views/book-view";

export function handleSearchByTitle(title) {
  try {
    const bookFoundByTitle = searchByTitle(title);
    return bookFoundByTitle;
  } catch (error) {
    showError(error.message);
  }
}
