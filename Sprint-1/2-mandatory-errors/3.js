// result as a string
let cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); // Output: "4213"


// result as a number
const last4DigitsNum = Number(cardNumber.toString().slice(-4));
console.log(last4DigitsNum); // Output: 4213


// the function your asked return string
function last4DigitsStr(cardNumber) {
  const last4Digs= cardNumber.toString().slice(-4);
  return last4Digs;
}

// the function your asked return number
function last4DigitsNum(number) {
  const last4Digs= Number(number.toString().slice(-4));
  return last4Digs;
}