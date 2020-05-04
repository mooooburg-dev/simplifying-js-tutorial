const prices = ["1.0", "흥정가능", "2.15"];
const formattedPrice = prices
  .map(price => parseFloat(price))
  .filter(price => price);
console.log(formattedPrice);
