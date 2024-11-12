let sum = 0;
let sameDigit = 0;
// Function to validate a credit card number
function cardValidation(cardNumber) {
  if (!/^\d{16}$/.test(cardNumber)) return false; //checks that card number has exactly 16 number digits

  for (let i = 1; i < cardNumber.length; i++) {
    //checks that all the digits are not the same
    if (cardNumber[0] !== cardNumber[i]) {
      sameDigit = 1;
      break; //if at least 2 digits are different, breaks the loop
    }
  }
  if (sameDigit == 0) return false; //if all digits are the same returns "false"
  if (Number(cardNumber[15]) % 2 !== 0) return false; //checks the last digit is an even number

  for (let i = 0; i < cardNumber.length; i++) {
    //sum of digits
    sum += Number(cardNumber[i]);
  }
  if (sum <= 16) {
    return false; // Invalid if sum of digits is 16 or less
  } else return true; // If all conditions are met, the card number is valid
}

//console.log(cardValidation("1111556111111112"));

test("card number must have exactly 16 digits", () => {
  expect(cardValidation("3")).toBe(false);
  expect(cardValidation(" ")).toBe(false);
  expect(cardValidation("1268")).toBe(false);
  expect(cardValidation("555555556669878")).toBe(false);
});
test("crad number must include just numbers", () => {
  expect(cardValidation("123456789a123456")).toBe(false);
  expect(cardValidation(" 9876543219874A25")).toBe(false);
  expect(cardValidation("123456789`123456")).toBe(false);
});

test(" must have at least two different digits", () => {
  expect(cardValidation("1111111111111111")).toBe(false);
});
test("final digit must be even", () => {
  expect(cardValidation("1234567891234567")).toBe(false);
  expect(cardValidation("1234567891234561")).toBe(false);
});
test("The sum of all the digits must be greater than 16", () => {
  expect(cardValidation("1111000111111112")).toBe(false);
});

test("This is a proper card number", () => {
  expect(cardValidation("0022334455667788")).toBe(true);
});

//## **PROJECT: Credit Card Validator**

//In this project you'll write a script that validates whether or not a credit card number is valid.

//Here are the rules for a valid number:

//-Number must be 16 digits, all of them must be numbers.
//- You must have at least two different digits represented (all of the digits cannot be the same).
//- The final digit must be even.
//- The sum of all the digits must be greater than 16.

//For example, the following credit card numbers are valid:

//```markdown
//9999777788880000
//6666666666661666
//```

//And the following credit card numbers are invalid:

//```markdown
//a92332119c011112 (invalid characters)
//4444444444444444 (only one type of number)
//1111111111111110 (sum less than 16)
//6666666666666661 (odd final number)
//```

//These are the requirements your project needs to fulfill:

//- Make a JavaScript file with a name that describes its contents.
//- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
//- Write at least 2 comments that explain to others what a line of code is meant to do.
//- Return a boolean from the function to indicate whether the credit card number is valid.

//Good luck!
