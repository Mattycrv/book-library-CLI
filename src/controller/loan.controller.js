import { getBookById } from "../services/book-service.js";
import { borrowBook } from "../services/loan-service.js";
import { showError } from "../views/book-view.js";
import { showBorrowedBook } from "../views/loan-view.js";

export function handleBorrowBook(bookId, borrower) {
  try {
    const newLoan = borrowBook(bookId, borrower);
    const bookFound = getBookById(newLoan.bookId);
    showBorrowedBook(newLoan, bookFound);
    return newLoan;
  } catch (error) {
    showError(error.message);
  }
}

export function handleReturnBook(bookId) {}

export function handleGetLoanById(bookId) {}

export function handleListLoans() {}
