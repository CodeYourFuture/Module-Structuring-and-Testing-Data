## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
  <!-- if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    } -->

    
- You must have at least two different digits represented (all of the digits cannot be the same).

<!-- const digitSet = new Set(cardNumber);
    if (digitSet.size < 2) {
        return false; -->
- The final digit must be even.

<!-- const lastDigit = parseInt(cardNumber.charAt(cardNumber.length - 1), 10);
    if (lastDigit % 2 !== 0) {
        return false;
    } -->

<!-- - The sum of all the digits must be greater than 16.
if(cardNumber.length !==16){
    return false
} -->
<!-- and I need to test using luhn algorithm too -->

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
......Answer.....

function validateCreditCard(cardNumber) {
    // Check if the card number length is exactly 16 digits
    if (cardNumber.length !== 16) {
        return false;
    }

    // Check if the card number has at least two different digits
    const digitSet = new Set(cardNumber);
    if (digitSet.size < 2) {
        return false;
    }

    // Apply Luhn Algorithm for the validity of the card number
    let sum = 0;
    let shouldDouble = false; // Start from the leftmost digit, no doubling initially

    // Iterate through the digits from left to right
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        // Double every second digit starting from the second-to-last (on right)
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; // If the result is greater than 9, subtract 9
            }
        }

        // Add the processed digit to the sum
        sum += digit;

        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}



