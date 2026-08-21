export function showError(message) {
  console.log(message);
}

export function showAddBook(book) {
  console.log("✅ Livro cadastrado com sucesso!");
  console.log(`Título: ${book.title}`);
  console.log(`Autor: ${book.author}`);
  console.log(`Ano: ${book.year}`);
}

export function showListBooks(books) {
  console.log("📋 Lista de livros:");
  books.forEach((book, indice) => {
    console.log(`${indice + 1} - ${book.title}`);
  });
}

export function showUpdatedBook(updatedBook) {
  console.log("✅ Livro atualizado com sucesso!");
  console.log(`Título: ${updatedBook.title}`);
  console.log(`Autor: ${updatedBook.author}`);
  console.log(`Ano: ${updatedBook.year}`);
}

export function showRemovedBook(removedBook) {
  console.log("✅ Este livro foi removido com sucesso:");
  console.log(`Título: ${removedBook.title}`);
  console.log(`Autor: ${removedBook.author}`);
  console.log(`Ano: ${removedBook.year}`);
}
