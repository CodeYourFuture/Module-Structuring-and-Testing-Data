/* 
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
*/

const validateCard = (card) => {
  const cardStr = String(card);
  // Must have 16 digits
  const has16Digits = cardStr.length === 16;
  // Must be all digits
  const isAllDigits = /^\d+$/.test(cardStr);
  // Must have at least 2 numbers
  const hasMoreThanOneDigit = cardStr.length > 1;
  // Final digit must be even
  const hasEvenFinalDigit = isAllDigits && (Number(cardStr) % 10) % 2 === 0;
  // Sum of numbers must be at least 16
  const sumOfNumbers = isAllDigits
    ? cardStr.split("").reduce((acc, num) => acc + Number(num), 0)
    : 0;

  const hasSumOver15 = sumOfNumbers > 15;

  // Must have more than one type of number
  const hasMultipleDistinctDigits = new Set(cardStr.split("")).size > 1;

  return has16Digits &&
    hasMoreThanOneDigit &&
    hasEvenFinalDigit &&
    hasSumOver15 &&
    hasMultipleDistinctDigits
    ? "Valid card"
    : "Invalid card";
};

console.log(validateCard(9999777788880000)); // valid
console.log(validateCard(6666666666661666)); // valid
console.log(validateCard("a92332119c011112")); // Invalid
console.log(validateCard(4444444444444444)); // Invalid
console.log(validateCard(1111111111111110)); // Invalid
console.log(validateCard(6666666666666661)); // Invalid

module.exports = validateCard;
