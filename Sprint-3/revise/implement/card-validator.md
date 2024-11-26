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

_______________________________--------SOLUTION-------_____________________________________

                               Pseudocode for Validation Logic

Input Validation: Check if the credit card number is 16 characters long and only contains digits.
Digit Uniqueness Check: Ensure that the number contains at least two unique digits.
Final Digit Check: Confirm that the last digit is even.
Sum Check: Verify that the sum of all digits is greater than 16.
Return Value: Return true if all checks pass, otherwise false.

                                Directory Structure:

creditCardValidator/
└── validateCreditCard.js
JavaScript Code: validateCreditCard.js
Here’s the complete code to validate a credit card number.

// Function to validate a credit card number based on specific rules
function validateCreditCard(number) {
  // Check if the input is a string of exactly 16 digits
  if (!/^\d{16}$/.test(number)) {
    return false;
  }

  // Check for at least two different digits
  const uniqueDigits = new Set(number);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Ensure the last digit is even
  if (parseInt(number[number.length - 1]) % 2 !== 0) {
    return false;
  }

  // Calculate the sum of all digits and check if it's greater than 16
  const digitSum = Array.from(number).reduce((sum, digit) => sum + parseInt(digit), 0);
  if (digitSum <= 16) {
    return false;
  }

  // All checks passed, the card is valid
  return true;
}

// Test cases to verify the function
console.log(validateCreditCard("9999777788880000")); // true
console.log(validateCreditCard("6666666666661666")); // true
console.log(validateCreditCard("a92332119c011112")); // false (invalid characters)
console.log(validateCreditCard("4444444444444444")); // false (only one type of number)
console.log(validateCreditCard("1111111111111110")); // false (sum less than 16)
console.log(validateCreditCard("6666666666666661")); // false (odd final number)


Explanation of Key Lines: 

Regular Expression Check: if (!/^\d{16}$/.test(number)) ensures the input is exactly 16 digits with no non-numeric characters.
Unique Digits Check: const uniqueDigits = new Set(number); uses a Set to count unique digits, which must be at least 2.
Sum Calculation: Array.from(number).reduce((sum, digit) => sum + parseInt(digit), 0); computes the total of all digits to check if it’s greater than 16.