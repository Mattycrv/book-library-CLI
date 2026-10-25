import { loadBooks } from "./storage.service.js";

export function searchByTitle(title) {
  const books = loadBooks();
  const booksFound = books.filter((book) => {
    return book.title.toLowerCase().includes(title.toLowerCase());
  });

  if (booksFound.length === 0) {
    throw new Error("Nenhum livro encontrado.");
  }

  return booksFound;
}

export function searchByAuthor(author) {
  const books = loadBooks();
  const booksFound = books.filter((book) => {
    return book.author.toLowerCase().includes(author.toLowerCase());
  });

  if (booksFound.length === 0) {
    throw new Error("Nenhum livro encontrado.");
  }

  return booksFound;
}

export function searchBooks(term) {
  const books = loadBooks();
  const booksFound = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(term.toLowerCase()) ||
      book.author.toLowerCase().includes(term.toLowerCase()) ||
      book.year.toLowerCase().includes(term.toLowerCase())
    );
  });

  if (booksFound.length === 0) {
    throw new Error("Nenhum livro encontrado.");
  }

  return booksFound;
}
