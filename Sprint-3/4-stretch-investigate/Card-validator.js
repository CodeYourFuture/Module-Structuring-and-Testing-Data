function isValidCreditCard(cardNumber) {

    // Must be 16 digits
    if (cardNumber.length !== 16) return false;

    // Must be all digits
    if (!/^\d{16}$/.test(cardNumber)) return false;

    const digits = [...cardNumber].map(Number);

    // Last digit must be even
    if (digits[15] % 2 !== 0) return false;

    // At least two different digits
    const uniqueDigits = new Set(digits);
    if (uniqueDigits.size === 1) return false;

    // Sum must be greater than 16
    const sum = digits.reduce((acc, val) => acc + val, 0);
    if (sum <= 16) {
        // If sum is NOT greater than 16
        return false};
    
    // If all checks passed
    return true;
}


     

// Test cases 
console.log(isValidCreditCard("1234567899876548")); // true (valid card)
console.log(isValidCreditCard("2224446668881118")); // true (valid card)
console.log(isValidCreditCard("a92332119c011112")); // false (contains letters)
console.log(isValidCreditCard("4444444444444444")); // false (all digits the same)
console.log(isValidCreditCard("333111111111110")); // false (sum less than 16)





