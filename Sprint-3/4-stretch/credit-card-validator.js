function isValidCreditCard(cardNumber) {
    // Rule 1: Must be exactly 16 characters long
    if (cardNumber.length !== 16) {
        return false;
    }

    // Rule 2: Must contain only digits
    if (!cardNumber.match(/^\d{16}$/)) {
        return false;
    }

    // Rule 3: Cannot be made up of only one repeated digit
    if (cardNumber.match(/^(.)\1+$/)) {
        return false;
    }

    // Rule 4: Final digit must be even
    const lastDigit = Number(cardNumber[cardNumber.length - 1]);

    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 5: Sum of all digits must be greater than 16
    let sum = 0;

    for (const digit of cardNumber) {
        sum += Number(digit);
    }

    if (sum <= 16) {
        return false;
    }

    // Passed every rule
    return true;
}

module.exports = isValidCreditCard;