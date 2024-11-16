function validateCreditCard(cardNumber) {
      
    // Check if the cardnumber is 16 digits and contains only numbers
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        return false;}
        
    //Check if there are at least two different digits
    let allDigitsSame = true;
    for (let i = 1; i < cardNumber.length; i++) {
        if (cardNumber[i] !== cardNumber[0]) {
            allDigitsSame = false;
            break; // Exit loop once a different digit is found
        }
    }
    if (allDigitsSame) {
        return false; 
    }

    // Check if the final digit is even
    const lastDigit = parseInt(cardNumber.charAt(cardNumber.length - 1));
  if (lastDigit % 2 !== 0) {
    return false; 
  }
  let sumOfDigits=0;
  cardNumber.split('').forEach(digit=>sumOfDigits+=parseInt(digit));
  if (sumOfDigits <= 16) {
    return false; // Return false if the sum of the digits is less than or equal to 16
  }
  return true;

}

console.log(validateCreditCard('9999777788880000')); // true
console.log(validateCreditCard('6666666666661666')); // true

console.log(validateCreditCard('4444444444444444')); // false
console.log(validateCreditCard('a92332119c011112')); // false
console.log(validateCreditCard('6666666666666661')); // false
console.log(validateCreditCard('1111111111111110')); // false

