export function createBook(title, author, year) {
  return {
    id: crypto.randomUUID(),
    title,
    author,
    year,
    available: true,
  };
}
