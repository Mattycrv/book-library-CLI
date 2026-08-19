import { calculateReturnDate } from "../utils/date-helper.js";

export function createLoan(bookId, borrower, rentedDate) {
  return {
    id: crypto.randomUUID(),
    bookId,
    borrower,
    rentedDate: rentedDate || new Date().toLocaleDateString("pt-BR"),
    expectedReturnDate: calculateReturnDate(),
    actualReturnDate: null,
  };
}
