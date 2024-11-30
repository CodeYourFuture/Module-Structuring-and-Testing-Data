## **PROJECT: Credit Card Validator**
In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:
function (){};
 Number must be 16 digits, all of them must be numbers.
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


// Function to validate a credit card number based on specific conditions
function validateCreditCard(cardNumber) {
    // Rule 1: Check if the card number is exactly 16 digits and all digits are numbers
    if (!/^\d{16}$/.test(cardNumber)) {
        // If the card number is not 16 digits or contains non-numeric characters
        console.log("Invalid: The card number must be exactly 16 digits and contain only numbers.");
        return false;
    }

    // Rule 2: Check if the card number contains at least two different digits
    const uniqueDigits = new Set(cardNumber); // Create a Set to store unique digits
    if (uniqueDigits.size < 2) {
        // If the Set has less than 2 unique digits, return false
        console.log("Invalid: The card number must have at least two different digits.");
        return false;
    }

    // Rule 3: Check if the final digit is even
    const lastDigit = Number(cardNumber[15]); // Convert the last character to a number
    if (lastDigit % 2 !== 0) {
        // If the last digit is not even
        console.log("Invalid: The last digit must be even.");
        return false;
    }

    // Rule 4: Check if the sum of all digits is greater than 16
    const digitSum = cardNumber
        .split('') // Split the card number into individual digits
        .reduce((sum, digit) => sum + Number(digit), 0); // Calculate the sum of all digits
    if (digitSum <= 16) {
        // If the sum is less than or equal to 16
        console.log("Invalid: The sum of all digits must be greater than 16.");
        return false;
    }

    // If all checks pass, return true
    return true;
}

// Example Usage
console.log(validateCreditCard("9999777788880000")); // Expected output: true
console.log(validateCreditCard("6666666666661666")); // Expected output: true
console.log(validateCreditCard("a92332119c011112")); // Expected output: false (invalid characters)
console.log(validateCreditCard("4444444444444444")); // Expected output: false (only one type of number)
console.log(validateCreditCard("1111111111111110")); // Expected output: false (sum less than 16)
console.log(validateCreditCard("6666666666666661")); // Expected output: false (odd final number)

