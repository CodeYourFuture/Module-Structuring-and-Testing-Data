
function creditCardValidator(cardNumber) {
  let cardNumberArray = cardNumber.split(""); // convert to array of strings
  let intNumber = cardNumberArray.map((num) => + num); // convert array of strings to array integers
  let sum = 0;
  let regexNum = /^[0-9]+$/;

  if (!regexNum.test(cardNumber)) return "Invalid Characters."; //check if cardNumber contains any letter or special character

  for (let i = 0; i < intNumber.length; i++) {
    sum += intNumber[i];
  }

  let firstCardNumber = cardNumber[0];
  let repetitionNumber = 0;
  for (let i = 0; i < cardNumber.length; i++) {
    if (cardNumber[i] === firstCardNumber) {
      repetitionNumber += 1;
    }
  }
  if (repetitionNumber === 16) {
    return "not valid, all numbers are the same";
  }

  if (cardNumber[cardNumber.length - 1] % 2 == 1)
    return "Invalid card: odd final number";

  if (sum <= 16) return "Sum is less or equal to 16 ";

  if (cardNumber.length === 16) return "Valid card";
}

console.log(creditCardValidator("9999777788880000"));//valid card number
console.log(creditCardValidator("6666666666661666"));//Valid card number
console.log(creditCardValidator("a92332119c011112"));//invalid characters
console.log(creditCardValidator("1111111111111110"));//sum less than 16
console.log(creditCardValidator("4444444444444444")); //should fail bc Only one type of number provided"
console.log(creditCardValidator("6666666666666661"));//odd final number
