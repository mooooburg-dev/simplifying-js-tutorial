class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || "2주";
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }
}

const coupon = new Coupon(5);
console.log(coupon.price);
console.log(coupon["expiration"]);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationMessage());
