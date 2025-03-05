function cardValidator(cardNum) {
    const cardStr = cardNum.toString(); // convert number to string to check its length and digits
  if (cardStr.length !== 16) {
    return false; // 16 characters length requirement
  }
  if (new Set(cardStr).size === 1) {
    return false;//  check that cardNum has at least two different digits
  }
  if (parseInt(cardStr[cardStr.length - 1]) % 2 !== 0) {
    return false; // check the final digit is even
  }
  if ((cardStr.split("").reduce((sum, digit) => sum + parseInt(digit), 0) <= 16)) {
    return false; // sum of digits must be greater than 16
  }
    return true;

}

module.exports = cardValidator;

/* 
Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.
*/
