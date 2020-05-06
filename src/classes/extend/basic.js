import Coupon from "./extend";
class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || "2시간";
  }
}
const flash = new FlashCoupon(10);
flash.price; //10
flash.getPriceText(); //"$ 10"
