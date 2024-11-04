function validateCreditCard(cardNumber) {
    // Convert cardNumber to an array of numbers
    const newCardNumber = cardNumber.split('').map(Number);
    const uniqueDigits = new Set(cardNumber);
    
    if (
        /^\d{16}$/.test(cardNumber) &&  // Checks if cardNumber is exactly 16 digits and all numeric
        uniqueDigits.size >= 2 &&       // Checks if there are at least two unique digits
        newCardNumber[newCardNumber.length - 1] % 2 === 0 &&  // Checks if the last digit is even
        newCardNumber.reduce((sum, digit) => sum + digit, 0) > 16  // Checks if the sum of digits is greater than 16
    ) 
    {
        return true; // If all conditions are met, return true
    }
    
    return false; // If any condition fails, return false
}
console.log(validateCreditCard("9999777788880000")); 
console.log(validateCreditCard("4444444444444444")); 
console.log(validateCreditCard("1111111111111110")); 
console.log(validateCreditCard("6666666666661666")); 
console.log(validateCreditCard("6666666666666661")); 