// make a js file with a descriptive name
// create a function with a descriptive name
//the function should credit card number as argument and validate it by outing either true or false
// write at least 2 comments to explain code
//return boolean to indicate whether card number is valid or not

// checks if card number is strictly 16 digits
function is16Digit(str) {
  return /^\d{16}$/.test(str);
}

//check if there are at least 2 uniques digits
function AtLeast2UniqueNumbers(number) {
  const str = number.toString();
  return new Set(str).size >= 2;
}

function IsLastDigitDivisibleBy2(str) {
  const lastDigit = str.charAt(str.length - 1);
  return Number(lastDigit) % 2 === 0;
}

// this function will validate a credit card number
function creditCardValidator(cardNumber) {
  return (
    is16Digit(cardNumber) &&
    AtLeast2UniqueNumbers(cardNumber) &&
    IsLastDigitDivisibleBy2(cardNumber)
  );
}
console.log(creditCardValidator("1111111111111111"));
