function validateCreditCard(cardNumber) {
  if (cardNumber.length !== 16) {
    return false; // this line of code checks whether the card number is 16 digits long or not
  }
  let index = 0;
  while (index < cardNumber.length) {
    if (cardNumber[index] < "0" || cardNumber[index] > "9") {
      return false; // this line of code checks whether the card number is composed of digits not other characters
    }
    index++;
  }
  const firstDigit = cardNumber[0]; // first digit of the card number is stored for the purpose of checking up whether two digits are identical or not

  index = 1;
  while (index < cardNumber.length) {
    if (cardNumber[index] !== firstDigit) {
      break; // loop ends immediately here to give way to the next check
    }
    index++;
  }
  if (index === cardNumber.length) {
    return false;
  }
  const lastDigit = cardNumber.slice(-1);
  const lastNumber = Number(lastDigit);

  if (lastNumber % 2 !== 0) {
    return false; // this line of code checks whether the last digit of the card number is divisible by 2 in other words "even" or not
  }

  let total = 0;
  index = 0;
  while (index < cardNumber.length) {
    total += Number(cardNumber[index]);
    index++;
  }
  if (total <= 16) {
    return false; // this line of code checks whether the sum of all the digits in the card number is more than 16 or not
  }

  return true;
}
console.log(validateCreditCard("9999777788880000"));
