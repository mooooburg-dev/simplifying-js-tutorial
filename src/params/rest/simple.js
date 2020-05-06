function validateCharacterCount(max, items) {
  return items.every(item => item.length < max);
}

validateCharacterCount(10, ["Hobbs", "Eagles"]); // true
