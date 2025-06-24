function cardValidator(cardNumber) {
    //Check if length is exactly 16
    if (cardNumber.length !== 16) {
      return false;
    }
  
    //Check all characters are digits
    for (let i = 0; i < cardNumber.length; i++) {
        if (cardNumber[i] < '0' || cardNumber[i] > '9') 
            return false;
      }
    
    // Check not all digits are the same
    
    let allSame = true;
for (let i = 1; i < cardNumber.length; i++) {
  if (cardNumber[i] !== cardNumber[0]) {
    allSame = false;
    break;
  }
}
  if (allSame) {
    return false;
  }
    //Check sum of all digits is greater than 16
    const sum = cardNumber
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
    if (sum <= 16) {
      return false;
    }
  
    //Check last digit is even
    const lastDigit = Number(cardNumber[cardNumber.length - 1]);
    if (lastDigit % 2 === 0) {
      return false;
    }
  
    return true;
  }
  
  module.exports = cardValidator;
  