// function removeItem(items, removable) {
//   const update = [];
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] !== removable) {
//       update.push(items[i]);
//     }
//   }
//   return update;
// }

// function removeItem(items, removable) {
//   const index = items.indexOf(removable);
//   items.splice(index, 1);
//   return items;
// }

// function removeItem(items, removable) {
//   const index = items.indexOf(removable);
//   return items.slice(0, index).concat(items.slice(index + 1));
// }

function removeItem(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

const books = ["practical vim", "moby dick", "the dar tower"];
const recent = removeItem(books, "moby dick");
const novels = removeItem(books, "practical vim");
console.log(recent);
console.log(novels);
