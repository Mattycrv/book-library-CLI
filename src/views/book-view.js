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
