import { createBook } from "../models/book.js";
import { saveBooks, loadBooks } from "./storage.service.js";

export function addBook(title, author, year) {
  const books = loadBooks();

  if (isDuplicateBook(books, title, author)) {
    throw new Error("Este livro já está cadastrado.");
  }

  const newBook = createBook(title, author, year);
  books.push(newBook);
  saveBooks(books);
  return newBook;
}

export function listBooks() {
  const books = loadBooks();
  return books;
}

export function getBookById(id) {
  const books = loadBooks();
  const bookFound = books.find((book) => book.id === id);

  if (!bookFound) return null;

  return bookFound;
}

function isDuplicateBook(books, title, author, currentId = null) {
  const normalize = (t) => t.trim().toLowerCase();
  const normalizedTitle = normalize(title);
  const normalizedAuthor = normalize(author);

  const duplicate = books.some((book) => {
    return (
      book.id !== currentId &&
      normalize(book.title) === normalizedTitle &&
      normalize(book.author) === normalizedAuthor
    );
  });

  return duplicate;
}

export function updateBook(id, updatedData) {
  const books = loadBooks();
  const bookFound = getBookById(id);

  if (!bookFound) {
    throw new Error("Livro não encontrado.");
  }

  const title = updatedData.title ?? bookFound.title;
  const author = updatedData.author ?? bookFound.author;
  const year = updatedData.year ?? bookFound.year;

  if (isDuplicateBook(books, title, author, id)) {
    throw new Error("Este livro já está cadastrado");
  }

  const updatedBook = {
    ...bookFound,
    title,
    author,
    year,
  };

  const index = books.findIndex((book) => book.id === id);
  books[index] = updatedBook;

  saveBooks(books);

  return updatedBook;
}

export function removeBook(id) {
  const books = loadBooks();
  const removedBook = getBookById(id);

  if (!removedBook) {
    throw new Error("Livro não encontrado.");
  }

  const newArray = books.filter((book) => book.id !== id);

  saveBooks(newArray);
  return removedBook;
}
