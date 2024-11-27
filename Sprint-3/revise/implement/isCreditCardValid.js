/* In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.

Good luck! */

function isCreditCardValid(creditCardNumber) {
  // here i am converting the number to string, this will help in using string operations
  if (typeof creditCardNumber !== "string")
    creditCardNumber = creditCardNumber.toString();

  // checking if the provided number is 16 digits and all numeric
  if (!/^\d{16}$/.test(creditCardNumber)) {
    return "Invalid: Must be exactly 16 digits, all numbers";
  }

  // checking that the last digit is even
  const lastDigit = parseInt(creditCardNumber[creditCardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return "Invalid: The last digit must be even";
  }

  // checking that the sum of the numbers is not less than 16
  const sumOfNumbers = creditCardNumber
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit));
  if (sumOfNumbers <= 16) {
    return "Invalid: The sum of all the digits must be greater than 16";
  }

  const sameDigits = new Set(creditCardNumber);
  if (sameDigits.size < 2) {
    return "Invalid: Must have 2 at least different digits";
  }

  // if all the checks pass the function will return True
  return "True";
}

console.log(isCreditCardValid("12345678901234b6")); // Invalid: Must be exactly 16 digits, all numbers
console.log(isCreditCardValid("1111111111111111")); // Invalid: The last digit must be even
console.log(isCreditCardValid("1234567890123455")); // Invalid: The last digit must be even
console.log(isCreditCardValid("0000000000000000")); // Invalid: The sum of all the digits must be greater than 16
console.log(isCreditCardValid("1234567890123452")); // True
console.log(isCreditCardValid("2222222222222222")); // Invalid: Must have 2 at least different digits
console.log(isCreditCardValid("8765432109876544")); // True
console.log(isCreditCardValid(1234567890123456)); // True
console.log(isCreditCardValid("12345678901234")); // Invalid: Must be exactly 16 digits, all numbers
