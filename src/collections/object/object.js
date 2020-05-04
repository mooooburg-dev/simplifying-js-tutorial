export const config = {
  endpoint: "http://pragprog.com",
  key: "secrect"
};

function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price)
  };
}
const bill = getBill({
  name: "객실 청소",
  price: 30
});

function displayBill(bill) {
  return `${bill.name} 비용은 ${bill.total} 달러이며 납부일은 ${bill.due} 입니다.`;
}

function twoWeeksFromNow() {}

function calculateTotal(price) {
  return price;
}
