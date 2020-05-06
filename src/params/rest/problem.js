function getArguments() {
  return arguments;
}

console.log(validateCharacterCount(10, "abcd", "1234"));

function validateCharacterCount(max) {
  const items = Array.prototype.slice.call(arguments, 1);
  return items.every(item => item.length < max);
}
