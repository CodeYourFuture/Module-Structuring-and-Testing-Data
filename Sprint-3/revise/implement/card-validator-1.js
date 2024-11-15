// Function to check if a credit card number is valid
function isValidCreditCard(number) {
    // Rule 1: Check if the number is exactly 16 digits and contains only numbers
    if (typeof number !== 'string' || number.length !== 16 || !/^\d+$/.test(number)) {
        return false;
    }

    // Rule 2: Check if there are at least two different digits
    const uniqueDigits = new Set(number);
    if (uniqueDigits.size < 2) {
        return false;
    }

    // Rule 3: Check if the last digit is even
    const lastDigit = parseInt(number[number.length - 1], 10);
    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 4: Check if the sum of all digits is greater than 16
    const sum = number.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    if (sum <= 16) {
        return false;
    }

    // If all rules are met, the card is valid
    return true;
}

// Tests
console.log(isValidCreditCard("9999777788880000")); // should return true
console.log(isValidCreditCard("6666666666661666")); // should return true
console.log(isValidCreditCard("a92332119c011112")); // should return false (invalid characters)
console.log(isValidCreditCard("4444444444444444")); // should return false (only one type of digit)
console.log(isValidCreditCard("1111111111111110")); // should return false (sum is less than 16)
console.log(isValidCreditCard("6666666666666661")); // should return false (odd final number)