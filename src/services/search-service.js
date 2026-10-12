import { loadBooks, saveBooks } from "./storage.service.js";

export function searchByTitle(title) {
  const books = loadBooks();
  const searchTerm = books.filter((searchTitle) => {
    return searchTitle.toLowerCase() == title.toLowerCase();
  });

  if (!searchTerm) throw new Error("Nenhum livro encontrado.");

  saveBooks(searchTerm);
  return searchTerm;
}

export function searchByAuthor(author) {}

export function searchBooks(term) {}
