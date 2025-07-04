function cardValidator(cardNumber) {
  //Check if length is exactly 16
  if (cardNumber.length !== 16) {
    return false;
  }
  let sum = 0;
  let allSame = true;

  for (let i = 0; i < cardNumber.length; i++) {
    const char = cardNumber[i];

    //Check all characters are digits
    if (cardNumber[i] < "0" || cardNumber[i] > "9") return false;

    const digit = Number(char);
    sum += digit;

    // Check not all digits are the same
    if (cardNumber[i] !== cardNumber[0]) {
      allSame = false;
    }
  }
  if (allSame) return false;
  if (sum <= 16) return false;

  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 === 0) {
    return false;
  }

  return true;
}

module.exports = cardValidator;
