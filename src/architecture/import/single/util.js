function getPower(decimalPlaces) {
  return 10 ** decimalPlaces;
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function roundToDecimalPlace(number, decimalPlace = 2) {
  const round = getPower(decimalPlace);
  return Math.round(number * round) / round;
}
