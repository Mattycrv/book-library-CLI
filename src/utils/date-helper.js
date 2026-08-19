export function calculateReturnDate() {
  const date = new Date();
  const days = 7;

  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("pt-BR");
}
