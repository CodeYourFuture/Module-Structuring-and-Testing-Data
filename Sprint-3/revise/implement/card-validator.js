
// Function to validate a credit card number
function validateCreditCard(cardNumber) {
    // Ensure the input is a string
    const numString = String(cardNumber);

    // Rule 1: Check if the card number is 16 digits and all are numeric
    if (numString.length !== 16 || !/^\d+$/.test(numString)) {
        return false;
    }

    // Rule 2: Check if there are at least two different digits
    const uniqueDigits = new Set(numString);
    if (uniqueDigits.size < 2) {
        return false;
    }

    // Rule 3: Check if the final digit is even
    const lastDigit = parseInt(numString[numString.length - 1], 10);
    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 4: Check if the sum of all digits is greater than 16
    const digitSum = [...numString].reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    if (digitSum <= 16) {
        return false;
    }

    // If all checks pass, the card is valid
    return true;
}

// Test cases
console.log(validateCreditCard("9999777788880000")); // true
console.log(validateCreditCard("6666666666661666")); // true
console.log(validateCreditCard("a92332119c011112")); // false (invalid characters)
console.log(validateCreditCard("4444444444444444")); // false (only one type of number)
console.log(validateCreditCard("1111111111111110")); // false (sum less than 16)
console.log(validateCreditCard("6666666666666661")); // false (odd final number)

module.exports = validateCreditCard;