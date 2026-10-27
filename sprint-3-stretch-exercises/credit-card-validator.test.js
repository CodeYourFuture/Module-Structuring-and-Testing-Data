//validate credit card number
//
//- Number must be 16 digits, all of them must be numbers.
//- You must have at least two different digits represented (all of the digits cannot be the same).
//- The final digit must be even.
//- The sum of all the digits must be greater than 16.

// Make a JavaScript file with a name that describes its contents.
//- Create a function with a descriptive name which makes it clear what the function does.
// The function should take one argument, the credit card number to validate.
//- Write at least 2 comments that explain to others what a line of code is meant to do.
//- Return a boolean from the function to indicate whether the credit card number is valid.

// function creditCardValidator(number)

// Case 1 number must be 16 digits, all of them must be numbers.
import { creditCardValidator } from "./credit-card-validator.js";
test("number must be 16 digits", () => {
  const number = "1234567891230022";
  const result = creditCardValidator(number);
  expect(result).toEqual(true);
});

//- Case 2 the final digit must be even.
test("the final digit must be even.", () => {
  const number = "1234567891230029";
  const result = creditCardValidator(number);
  expect(result).toEqual(true);
});

//- Case 3 the sum of all the digits must be greater than 16.
test("Number must be 16 digits, all of them must be numbers.", () => {
  const number = "111111111111111";
  const result = creditCardValidator(number);
  expect(result).toEqual(true);
});