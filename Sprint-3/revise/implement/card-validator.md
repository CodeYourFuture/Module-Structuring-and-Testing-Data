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


function validateCreditCard(cardNumber) {
  //Ensure the input is a string to handle all checks easily
  if (typeof cardNumber !== "string") {
    return false;
  }

  //Check if card number is 16 digits and contain only numbers
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  //Check for at least two different digits
  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    console.log("grater than 2");
    return false;
  }

  //Ensure the last digit is even
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  //Ensure the sum of the all digits is grater than 16
  const digitArray = cardNumber.split("");
  const digitSUm = digitArray.reduce((sum, digit) => sum + Number(digit), 0);
  if (digitSUm <= 16) {
    return false;
  }

  //if all rules pass! the card number is valid
  return true;
}

console.log(validateCreditCard("9999777788880000"));
