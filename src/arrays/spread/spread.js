const book = ["Reasons and Persons", "Derek Parfit", 19.99];
function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`;
}

console.log(formatBook(book[0], book[1], book[2]));
console.log(formatBook(...book));
