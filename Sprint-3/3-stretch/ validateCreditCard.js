function validateCreditCard(number) {
  // Convert input to a string so we can check characters easily
  const numStr = String(number);

  // Rule 1: Must be 16 digits, all numbers
  if (!/^\d{16}$/.test(numStr)) {
    return false;
  }

  // Rule 2: Must contain at least two different digits
  const uniqueDigits = new Set(numStr);
  if (uniqueDigits.size < 2) {
    return false;
  }

  // Rule 3: The last digit must be even
  const lastDigit = parseInt(numStr[numStr.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // Rule 4: The sum of all digits must be greater than 16
  const sum = numStr
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (sum <= 16) {
    return false;
  }

  // If all checks pass, return true ✅
  return true;
}

module.exports = validateCreditCard;


test("valid credit card numbers should return true", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
  expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("invalid cards with letters should return false", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false);
});

test("invalid cards with all same digits should return false", () => {
  expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("invalid cards with sum less than 16 should return false", () => {
  expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("invalid cards with odd final digit should return false", () => {
  expect(validateCreditCard("6666666666666661")).toBe(false);
});