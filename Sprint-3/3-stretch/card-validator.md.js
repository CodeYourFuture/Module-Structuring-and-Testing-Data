/**
 * Validates a credit card number based on specific rules:
 * - Must be 16 digits
 * - Must have at least two different digits
 * - Final digit must be even
 * - Sum of all digits must be greater than 16
 * 
 * @param {string} cardNumber - The credit card number to validate
 * @returns {boolean} - true if valid, false if invalid
 */
function validateCreditCard(cardNumber) {
    // Rule 1: Check if length is exactly 16 digits and all are numbers
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    // Convert string to array of numbers
    const digits = cardNumber.split('').map(Number);

    // Rule 2: Check for at least two different digits
    const uniqueDigits = new Set(digits);
    if (uniqueDigits.size < 2) {
        return false;
    }

    // Rule 3: Check if the final digit is even
    if (digits[digits.length - 1] % 2 !== 0) {
        return false;
    }

    // Rule 4: Check if sum of all digits is greater than 16
    const sum = digits.reduce((acc, val) => acc + val, 0);
    if (sum <= 16) {
        return false;
    }

    // All rules passed
    return true;
}

// Example usage:
console.log(validateCreditCard("9999777788880000")); // true
console.log(validateCreditCard("6666666666661666")); // true
console.log(validateCreditCard("a92332119c011112")); // false
console.log(validateCreditCard("4444444444444444")); // false
console.log(validateCreditCard("1111111111111110")); // false
console.log(validateCreditCard("6666666666666661")); // false

module.exports = validateCreditCard;

const validateCreditCard = require('./credit-card-validator');

test("valid credit card number", () => {
    expect(validateCreditCard("9999777788880000")).toBe(true);
});

test("invalid credit card number (all same digits)", () => {
    expect(validateCreditCard("4444444444444444")).toBe(false);
});
