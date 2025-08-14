function cardValidator(card) {
  // this checks if the card length is strictly 16, i not it returns false.
  if (card.length !== 16) {
    return false;
  }
  //This checks to see if card only contains numbers, if not, it returns false
  if (/\D/.test(card)) {
    return false;
  }
  /*  

then return true if sum is above or equal 16 and the last digit is even. */

  //Firstly I created a variable called last digit, this is my fist step in checking if last digit is even.
  //parseInt changes the card into an integer, and then I select the last character
  let lastDigit = parseInt(card.charAt(card.length - 1));
  //I created another variable called sum
  let sum = 0;
  //Implemented a for loop,saying for let num be characters of the card.
  for (let num of card) {
    //and sum them all up adding to my variable sum.
    sum += parseInt(num);
  }
  //return true if sum is above or equal 16 and the last digit is even.
  return sum >= 16 && lastDigit % 2 === 0;
}

console.log(cardValidator("1225252252251248"));
module.exports = cardValidator;
