function cardNumberValidator(cardNumber) {
  if (cardNumber.length !== 16) {
    return false;
  }
  const numberInArray = cardNumber.toString().split(""); // convert the cardNumber to sting then into an array
  // check if all numbers are numbers
  let isAllNumbers = true;
  for (let index = 0; index <= numberInArray.length - 1; index++) {
    const currentNumber = numberInArray[index];
    if (isNaN(currentNumber)) {
      isAllNumbers = false;
      break;
    }
  }
  if (!isAllNumbers) {
    return false; // Not all digits are numbers
  }
  // check if at least two different digits present (all of the digits cannot be the same)
  let hasDifferentDigits = false;
  for (let i = 1; i < numberInArray.length; i++) {
    if (numberInArray[i] !== numberInArray[0]) {
      hasDifferentDigits = true;
      break;
    }
  }
  if (!hasDifferentDigits) {
    return false; // all digits are the same
  }
  // check if sum of all the digits are greater than 16.
    let sum = 0;
    for (let i = 0; i < numberInArray.length; i++) {
      sum += Number(numberInArray[i]);
    }
    if (sum <= 16) {
      return false; // the sum is not greater than 16
    }
    // check if the final digit is even.
    let lastDigit = numberInArray[numberInArray.length - 1] % 2;
    if (lastDigit !== 0) {
      return false;
    }
    return true;
}

module.exports = cardNumberValidator;

/*
pseudocode:
create a function to validate the card number.
Number must be 16 digits, 
All numbers must be numbers.
You must have at least two different digits represented (all of the digits cannot be the same).
The sum of all the digits must be greater than 16.
The final digit must be even.
*/
