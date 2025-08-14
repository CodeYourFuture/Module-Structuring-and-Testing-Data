function validateCreditCard(cardNumber) {
    // Remove dashes or spaces if included
    const sanitized = cardNumber.replace(/[^0-9]/g, "");

    // Rule 1: Must be exactly 16 digits, all numbers
    if (!/^\d{16}$/.test(sanitized)) {
        return false;
    }

    // Rule 2: Must contain at least two different digits
    const allSame = sanitized.split('').every(char => char === sanitized[0]);
    if (allSame) {
        return false;
    }

    // Rule 3: Last digit must be even
    const lastDigit = parseInt(sanitized[sanitized.length - 1]);
    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 4: Sum of all digits must be > 16
    const digitSum = sanitized
        .split('')
        .map(Number)
        .reduce((acc, val) => acc + val, 0);

    if (digitSum <= 16) {
        return false;
    }
}
    // If all checks pass, return true

    console.log(validateCreditCard(2345891034781456));