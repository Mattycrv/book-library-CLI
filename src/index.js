import { handleAddBook, handleListBook } from "./controller/book.controller.js";

const command = process.argv[2];

switch (command) {
  case "add-book": {
    const title = process.argv[3];
    const author = process.argv[4];
    const year = process.argv[5];

    handleAddBook(title, author, year);
    break;
  }

  case "list-books": {
    handleListBook();
    break;
  }

  case "update-book": {
    break;
  }
}
