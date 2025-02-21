const isValidCreditCard = require("./credit-card-validator");

test("valid credit card number", () => {
    const cardNumber = "9999777788880000";
    const result = isValidCreditCard(cardNumber);
    expect(result).toBe(true);
});

test("credit card with only one digit type", () => {
    const cardNumber = "4444444444444444";
    const result = isValidCreditCard(cardNumber);
    expect(result).toBe(false);
});

test("credit card with odd final digit", () => {
    const cardNumber = "6666666666666661";
    const result = isValidCreditCard(cardNumber);
    expect(result).toBe(false);
});

test("credit card with sum less than 16", () => {
    const cardNumber = "1111111111111110";
    const result = isValidCreditCard(cardNumber);
    expect(result).toBe(false);
});

test("credit card with invalid characters", () => {
    const cardNumber = "a92332119c011112";
    const result = isValidCreditCard(cardNumber);
    expect(result).toBe(false);
});

test("credit card with multiple digit types", () => {
    const cardNumber = "6666666666661666";
    const result = isValidCreditCard(cardNumber);
    expect(result).toBe(true);
});
