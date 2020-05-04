const cart = [
  {
    name: "The Foundation Triology",
    price: 19.99,
    discount: false
  },
  {
    name: "Godel, Escher, Bach",
    price: 15.99,
    discount: false
  },
  {
    name: "Red Mars",
    price: 5.99,
    discount: true
  }
];

const reward = {
  name: "Guide to Science Fiction",
  discount: true,
  price: 0
};

function addFreeGift(cart) {
  if (cart.length > 2) {
    cart.push(reward); // 원본이 조작되는 오류가 발생한다
    return cart;
  }
  return cart;
}

function addGift(cart) {
  if (cart.length > 2) {
    return [...cart, reward];
  }
  return cart;
}

function summarizeCart(cart) {
  const discountable = cart.filter(item => item.discount);
  if (discountable.length > 1) {
    return {
      error: "할인 상품은 하나만 주문할 수 있습니다."
    };
  }

  const cartWithReward = addFreeGift(cart);
  return {
    discount: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward
  };
}

function summarizeCartUpdate(cart) {
  const cartWithReward = addFreeGift(cart);
  const discountable = cart.filter(item => item.discount);
  if (discountable.length > 1) {
    return {
      error: "할인 상품은 하나만 주문할 수 있습니다."
    };
  }
  return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward
  };
}

function summarizeCartSpread(cart) {
  const cartWithReward = addFreeGift(cart);
  const discountable = cart.filter(item => item.discount);
  if (discountable.length > 1) {
    return {
      error: "할인 상품은 하나만 주문할 수 있습니다."
    };
  }
  return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward
  };
}

// 배열의 앞에 추가하기
const titles = ["Moby Dick", "White Teeth"];
titles.shift("The Conscioud Mind");
const moreTitles = ["Moby Dick", "White Teeth"];
const evenMoreTitles = ["The Conscioud Mind", ...moreTitles];
console.log(evenMoreTitles);

// 복사하기
const toCopy = ["Moby Dick", "White Teeth"];
const copied = toCopy.slice();
const moreCopies = ["Moby Dick", "White Teeth"];
const moreCopied = [...moreCopies];
console.log(copied);
