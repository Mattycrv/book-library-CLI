import { loadLoans, saveLoans } from "./storage.service.js";
import { createLoan } from "../models/loan.js";
import { getBookById } from "./book-service.js";

export function borrowBook(bookId, borrower) {
  const loans = loadLoans();
  const bookFound = getBookById(bookId);

  if (!bookFound) {
    throw new Error("Livro não encontrado.");
  }

  const loanFound = loans.find((loan) => loan.bookId === bookId);

  if (loanFound) {
    throw new Error("Este livro já está emprestado.");
  }

  const newLoan = createLoan(bookId, borrower);
  loans.push(newLoan);
  saveLoans(loans);

  return newLoan;
}

export function returnBook(bookId) {}

export function getLoanById(bookId) {}

export function listLoan() {}
