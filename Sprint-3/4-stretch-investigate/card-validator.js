function cardNumberValidator(cardNum) {
  // Convert the input number to a string for digit-by-digit checks
  const strNum = cardNum.toString();
  
  if (!/^\d{16}$/.test(strNum)) { // Use regex '\d{16}' to ensure exactly 16 digits, no other chars 
  return false;
}

  // At least two different digits - all digits can't be the same
  const allSame = strNum.split("").every((digit) => digit === strNum[0]);
  // Converts the string into an individual digit array and checks if each digit is equal to first.
  if (allSame) {
    return false;
  }

  // Last digit must be even
  if (strNum.at(-1) % 2 !== 0) { // Takes last character and converts it to a number then checks if it divisible by 2. 
    return false;
  }

  // Sum of all digits must be greater than 16
  let digitSum = 0;
  for (let digit of strNum) {
    digitSum += Number(digit);
  } // Convert each character to a number and add it to the sum
  if (digitSum <= 16) {
    return false;
  }

  return true; // All validation rules passed
}

/*
console.log(cardNumberValidator("-123456789123450"));
console.log(cardNumberValidator("12.3456789123450"));
console.log(cardNumberValidator("              98"));
*/
module.exports = cardNumberValidator;

