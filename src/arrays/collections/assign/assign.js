const defaults = {
  author: "",
  title: "",
  year: 2017,
  rating: null
};

const book = {
  author: "Joe Morgan",
  title: "Simplifying JavaScript"
};

const bookWithDefaults = { ...defaults, ...book };
console.log(bookWithDefaults);
