import { capitalize, roundToDecimalPlace } from "./util";

function giveTotal(name, total) {
  return `${capitalize(name)}님, 합계는 ${roundToDecimalPlace(total)} 입니다.`;
}

console.log(giveTotal("Sara", 10.3333));
