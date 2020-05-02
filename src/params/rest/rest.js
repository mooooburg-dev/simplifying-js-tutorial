function getArguments(...args) {
  console.log(args);
}
// getArguments("Bloomsday", "June 16");

function validateCharacter(max, ...items) {
  return items.every(item => item.length < max);
}

// console.log(validateCharacter(10, "abcde")); // true
// console.log(validateCharacter(10, ...["wvoquie"])); // true

const tags = ["Hobbs", "EaglesaZa"];
// console.log(validateCharacter(10, ...tags)); // true
// console.log(validateCharacter(10, "Hobbs", "Eagle")); // true

["Spirited Away", "Princess Mononoke"].map((film, ...other) => {
  console.log(other);
  return film.toLowerCase();
});

function applyChanges(...args) {
  // updateAccount(...args);
  // closeModal();
}

const queue = ["stop", "collaborate", "listen"];
const [first, ...remaining] = queue;

console.log(first);
console.log(remaining);
console.log(queue);

// const [...beginning, last] = queue; // 문법 오류 : 나머지 요소는 마지막 요소가 되어야 함.
