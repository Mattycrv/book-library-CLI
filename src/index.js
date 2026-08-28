import {
  handleAddBook,
  handleGetBookById,
  handleListBook,
  handleRemoveBook,
  handleUpdateBook,
} from "./controller/book.controller.js";

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
    const id = process.argv[3];
    const updatedData = {
      title: process.argv[4],
      author: process.argv[5],
      year: process.argv[6],
    };

    handleUpdateBook(id, updatedData);
    break;
  }

  case "remove-book": {
    const id = process.argv[3];

    handleRemoveBook(id);
    break;
  }

  case "get-book": {
    const id = process.argv[3];

    handleGetBookById(id);
    break;
  }
}
