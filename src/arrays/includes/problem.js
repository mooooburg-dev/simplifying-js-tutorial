const section = ["contact", "shipping"];

// function displayShipping(sections) {
//   if (sections.indexOf("shipping")) {
//     return true;
//   }
//   return false;
// }

// function displayShipping(sections) {
//   return sections.indexOf("shipping") > -1;
// }

function displayShipping(sections) {
  return sections.includes("shipping");
}

console.log(displayShipping(section));
