
//In this project you'll write a script that validates whether or not a credit card number is valid.

//Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers.
// You must have at least two different digits represented (all of the digits cannot be the same).
// The final digit must be even.
// The sum of all the digits must be greater than 16.

//For example, the following credit card numbers are valid:



//And the following credit card numbers are invalid:



//These are the requirements your project needs to fulfill:

// Make a JavaScript file with a name that describes its contents.
// Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
// Write at least 2 comments that explain to others what a line of code is meant to do.
// Return a boolean from the function to indicate whether the credit card number is valid.



function validateCreditCard(cardNumber) {
    // Convert input to a string to easily access each digit
    const cardStr = cardNumber.toString();
    
    // Rule 1: Check if the number is exactly 16 digits and all are numeric
    if (cardStr.length !== 16 || !/^\d+$/.test(cardStr)) {
        return false;
    }
    
    // Rule 2: Check if at least two different digits are present
    const uniqueDigits = new Set(cardStr);
    if (uniqueDigits.size < 2) {
        return false;
    }

    // Rule 3: The final digit must be even
    const lastDigit = parseInt(cardStr[cardStr.length - 1]);
    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 4: Sum of all digits must be greater than 16
    const sumOfDigits = cardStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    if (sumOfDigits <= 16) {
        return false;
    }

    // If all checks passed, the card number is valid
    return true;
}

module.exports = validateCreditCard;
