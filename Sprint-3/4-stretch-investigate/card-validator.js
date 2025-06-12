/*
 Helper function to check if the card number is a string using the typeof operator.
 Because credit card numbers can start with zero, using a "number" type would mean dropping any leading zeros which would result in loss of information.
*/
function isString(cardNumber) {
  return typeof cardNumber === "string";
}

/* 
  Helper function to check that the card number is exactly 16 digits using the length property which checks the length of a string.
*/
function isSixteenDigits(cardNumber) {
  return cardNumber.length === 16;
}

/*
Helper function to check all characters in the card number are digits. 
.split("") turns the string into an array of characters.
.every() tests whether all characters in the card number pass the provided function parameters (char >= "0" && char <= "9"). In JavaScript, when you compare characters using >= or <=, it compares their Unicode (ASCII) values.The character "0" has the value 47 and "9" has the value 57. Therefore any letters or special characters outside this range will return false,
and ensures the card number does not contain any letters or special characters.
*/
function isAllDigits(cardNumber) {
  return cardNumber.split("").every((char) => char >= "0" && char <= "9");
}

/*
Helper function to check that there must be at least two unique digits in the card number.
Set is an object that lets you store unique values of any type. So new Set(cardNumber) will create a set of unique characters from the card number string. .size checks the number of unique characters in the set. Here it will return true if there are 2 or more unique digits (e.g. 1111114111111111)
*/
function hasAtLeastTwoDifferentDigits(cardNumber) {
  //pulls only the unique characters from the string
  const twoDifferentDigits = new Set(cardNumber);
  //checks if we have 2 or more unique ones
  return twoDifferentDigits.size >= 2;
}

/*
Helper function to check if the last single digit in the card number is even. .length finds out how many characters are in a string and -1 gets the last character in the string (it is the equivalent of the 16th number in the credit card number. In javascript to get the end character in a string or an array we count from the right side of the string which starts at -1).
Number() converts it to a number, and % 2 checks if it's even by assessing if when divided by 2 it has a remainder of 0.
*/
function isLastDigitEven(cardNumber) {
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  return lastDigit % 2 === 0;
}

/* 
Helper function to check if the sum of all digits is greater than 16.
The for...of loop iterates over each character (num) in the string input of cardNumber.
Number(num) converts each character to a number before adding to sum.
*/
function isSumGreaterThanSixteen(cardNumber) {
  let sum = 0;
  for (const num of cardNumber) {
    sum += Number(num);
  }
  return sum > 16;
}

// Main validation function to validate a credit card number. The argument for the function is the credit card number

function isValidCardNumber(cardNumber) {
  //if the card number input is not a "string" type.
  if (!isString(cardNumber)) {
    return "Card number must be a string";
  }
  //if the card number is not exactly 16 digits
  if (!isSixteenDigits(cardNumber)) {
    return "Card number must be exactly 16 digits";
  }
  //if all characters in the card number are not digits
  if (!isAllDigits(cardNumber)) {
    return "Card number must contain only digits";
  }
  //if the card number only has one recurring type of digit
  if (!hasAtLeastTwoDifferentDigits(cardNumber)) {
    return "Card number must contain at least two unique digits";
  }
  //if the last digit is not even
  if (!isLastDigitEven(cardNumber)) {
    return "The last digit must be an even number";
  }
  //if the sum of all digits is less than 16
  if (!isSumGreaterThanSixteen(cardNumber)) {
    return "The sum of all digits must be greater than 16";
  }
  // If all checks pass, return true
  return true;
}

module.exports = isValidCardNumber;
