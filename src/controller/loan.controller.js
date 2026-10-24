import { getBookById } from "../services/book-service.js";
import {
  borrowBook,
  getLoanById,
  returnBook,
} from "../services/loan-service.js";
import { loadBooks, loadLoans } from "../services/storage.service.js";
import { showError } from "../views/book-view.js";
import {
  showBorrowedBook,
  showLoanFound,
  showReturnedBook,
  showLoans,
} from "../views/loan-view.js";

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

export function handleReturnBook(bookId) {
  try {
    const loanReturned = returnBook(bookId);
    const bookFound = getBookById(loanReturned.bookId);
    showReturnedBook(loanReturned, bookFound);
    return loanReturned;
  } catch (error) {
    showError(error.message);
  }
}

export function handleGetLoanById(bookId) {
  const loanFound = getLoanById(bookId);

  if (!loanFound) return showError("Empréstimo não encontrado.");

  showLoanFound(loanFound, bookId);
  return loanFound;
}

export function handleListLoans() {
  const loans = loadLoans();
  showLoans(loans);
  return loans;
}
