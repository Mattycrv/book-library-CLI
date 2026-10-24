export function showSearchByTitle(books) {
  books.forEach((book) => {
    console.log("✅ Livro encontrado:");
    console.log(`Título: ${book.title}`);
    console.log(`Autor: ${book.author}`);
    console.log(`Ano: ${book.year} \n`);
  });
}
