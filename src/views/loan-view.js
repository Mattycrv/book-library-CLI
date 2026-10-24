import { getBookById } from "../services/book-service.js";

export function showBorrowedBook(loan, book) {
  console.log("✅ Livro emprestado com sucesso!");
  console.log(`Título: ${book.title}`);
  console.log(`Mutuário: ${loan.borrower}`);
  console.log(`Data de locação: ${loan.rentedDate}`);
  console.log(`Data prevista de retorno: ${loan.expectedReturnDate}`);
}

export function showReturnedBook(loan, book) {
  console.log("✅ Livro devolvido com sucesso!");
  console.log(`Título: ${book.title}`);
  console.log(`Mutuário: ${loan.borrower}`);
  console.log(`Data de locação: ${loan.rentedDate}`);
  console.log(`Data prevista de retorno: ${loan.expectedReturnDate}`);
  console.log(`Data da devolução efetiva: ${loan.actualReturnDate}`);
}

export function showLoanFound(loan, book) {
  console.log("✅ Empréstimo encontrado:");
  console.log(`Título: ${book.title}`);
  console.log(`Mutuário: ${loan.borrower}`);
  console.log(`Data de locação: ${loan.rentedDate}`);
  console.log(`Data prevista de retorno: ${loan.expectedReturnDate}`);
}

export function showLoans(loans) {
  loans.forEach((loan) => {
    const bookFound = getBookById(loan.bookId);

    console.log(`Título: ${bookFound.title}`);
    console.log(`Mutuário: ${loan.borrower}`);
    console.log(`Data de locação: ${loan.rentedDate}`);
    console.log(`Data prevista de retorno: ${loan.expectedReturnDate}`);
    console.log(`Data da devolução efetiva: ${loan.actualReturnDate} \n`);
  });
}
