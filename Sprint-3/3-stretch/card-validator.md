## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

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

Good luck!

function validateCreditCard(number) {
  // Convert input to a string so we can check characters easily
  const numStr = String(number);

  // Rule 1: Must be 16 digits, all numbers
  if (!/^\d{16}$/.test(numStr)) {
    return false;
  }

  // Rule 2: Must contain at least two different digits
  const uniqueDigits = new Set(numStr);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Rule 3: The last digit must be even
  const lastDigit = parseInt(numStr[numStr.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: The sum of all digits must be greater than 16
  const sum = numStr
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (sum <= 16) {
    return false;
  }

  // If all checks pass, return true ✅
  return true;
}

module.exports = validateCreditCard;

const validateCreditCard = require("./validateCreditCard");

test("valid credit card numbers should return true", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
  expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("invalid cards with letters should return false", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false);
});

test("invalid cards with all same digits should return false", () => {
  expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("invalid cards with sum less than 16 should return false", () => {
  expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("invalid cards with odd final digit should return false", () => {
  expect(validateCreditCard("6666666666666661")).toBe(false);
});

