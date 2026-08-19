import fs from "fs";

const PATH_BOOKS = "src/data/books.json";
const PATH_LOANS = "src/data/loans.json";

export function loadBooks() {
  if (!fs.existsSync(PATH_BOOKS)) {
    return [];
  }

  const dataBooks = fs.readFileSync(PATH_BOOKS, "utf8");
  const books = JSON.parse(dataBooks);
  return books;
}

export function saveBooks(books) {
  const data = JSON.stringify(books, null, 2);

  fs.writeFileSync(PATH_BOOKS, data);
}

export function loadLoans() {
  if (!fs.existsSync(PATH_LOANS)) {
    return [];
  }

  const dataLoans = fs.readFileSync(PATH_LOANS, "utf8");
  const loans = JSON.parse(dataLoans);
  return loans;
}

export function saveLoans(loans) {
  const data = JSON.stringify(loans, null, 2);

  fs.writeFileSync(PATH_LOANS, data);
}
