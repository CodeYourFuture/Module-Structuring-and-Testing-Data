function creditCardValidator(cardNum) {
  // Splits the cardNum into an array of characters
  const cardNumArray = cardNum.split("");

  // Checks if length is 16, otherwise return false
  if (cardNumArray.length !== 16) return false;

  // checks if all digits are numbers
  if (!cardNumArray.every((num) => num >= 0 && num <= 9)) return false;

  // Checks if there are at least two different digits
  const count = new Set(cardNumArray);
  if (count.size < 2) return false;

  // Checks if the sum of all digits is greater than 16
  const sumOfDigits = cardNumArray.reduce((acc, curr) => acc + Number(curr), 0);
  if (sumOfDigits <= 16) return false;

  //checks if last digit is even
  if (cardNumArray[cardNumArray.length - 1] % 2 !== 0) return false;
  return true;
}
console.log(creditCardValidator("1111111111111111"));
