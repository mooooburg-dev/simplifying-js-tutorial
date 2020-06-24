const book = {
  title: "Reasons and Persons",
  author: "Derek Parfit"
};

const update = { ...book, year: 1984, title: "Resons & Persons" };
console.log(update);
