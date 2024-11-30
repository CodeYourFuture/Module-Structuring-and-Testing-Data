function validateCreditCard(cardNumber) {
    // Ensure the input is a string and contains exactly 16 characters
    if (typeof cardNumber !== "string" || cardNumber.length !== 16) {
        return false;
    }

    // Check that all characters are numeric
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    // Convert string to array of digits for further validation
    const digits = cardNumber.split("").map(Number);

    // Rule 1: At least two different digits must be present
    const uniqueDigits = new Set(digits);
    if (uniqueDigits.size < 2) {
        return false;
    }

    // Rule 2: The final digit must be even
    const lastDigit = digits[digits.length - 1];
    if (lastDigit % 2 !== 0) {
        return false;
    }

    // Rule 3: The sum of all digits must be greater than 16
    const sumOfDigits = digits.reduce((sum, digit) => sum + digit, 0);
    if (sumOfDigits <= 16) {
        return false;
    }

    // If all rules are satisfied, the credit card number is valid
    return true;
}

test("Valid credit card: 9999777788880000", () => {
    expect(validateCreditCard("9999777788880000")).toBe(true);
});

test("Valid credit card: 6666666666661666", () => {
    expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("Invalid credit card: contains letters (a92332119c011112)", () => {
    expect(validateCreditCard("a92332119c011112")).toBe(false);
});

test("Invalid credit card: only one type of digit (4444444444444444)", () => {
    expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("Invalid credit card: sum less than 16 (1111111111111110)", () => {
    expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("Invalid credit card: final digit is odd (6666666666666661)", () => {
    expect(validateCreditCard("6666666666666661")).toBe(false);
});

test("Invalid credit card: more than 16 digits (12345678901234567)", () => {
    expect(validateCreditCard("12345678901234567")).toBe(false);
});

test("Invalid credit card: less than 16 digits (1234567890)", () => {
    expect(validateCreditCard("1234567890")).toBe(false);
});

test("Valid credit card: exactly 16 digits (1234567890123456)", () => {
    expect(validateCreditCard("1234567890123456")).toBe(true);
});
