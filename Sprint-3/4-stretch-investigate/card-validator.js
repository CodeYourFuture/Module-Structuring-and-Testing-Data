// note:
// > Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// > The final digit must be even.
// > The sum of all the digits must be greater than 16.

// For example, the following credit card numbers are valid:
// 9999777788880000
// 6666666666661666

// And the following credit card numbers are invalid:
// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)

function cardValidator(cardNum) {
  let myArr = cardNum.split("");
  //make sure it is all number, no alphabet.
  for (let i = 0; i < myArr.length; i++) {
    if (isNaN(myArr[i])) return false; //exit here if found
  }
  //Number must be 16 digits

  if (myArr.length < 16) return false;
  //The final digit must be even.
  if (cardNum % 2 !== 0) return false;
  //The sum of all the digits must be greater than 16.
  mytotalarr = myArr.map(Number);
  totalNum = 0;
  for (let i = 0; i < mytotalarr.length; i++) {
    totalNum = totalNum + mytotalarr[i];
  }
  if (totalNum < 16) return false;

  //all number in the string is the same
  if (totalNum == mytotalarr[0] * mytotalarr.length) return false;

  return true;
}

module.exports = cardValidator;
