function cardValidation(CardNumber){
    // Removes any whitespace characters (like spaces) from the beginning, middle, or end of the input string.
    // This normalization ensures that subsequent validation logic only operates on the raw numeric digits.
    let cardNumber = CardNumber.replace(/\s+/g, ''); 
    // Checks if the processed card number string has exactly 16 characters.
    // If it's not precisely 16 digits long, it fails this fundamental requirement.
    if (cardNumber.length !== 16) {
        return false; 
    }
    // Iterates through each character of the cleaned card number string.
    // This loop ensures that every single character is a valid numerical digit (0-9).
    for (let i = 0; i < cardNumber.length; i++) {
    // Uses isNaN (Is Not a Number) to check if the current character cannot be converted into a valid number.
    // For example, 'a' or '-' would result in true for isNaN.
        if (isNaN(cardNumber[i]) ) {
            return false;
        }
        }
    // Splits the 'cardNumber' string into an array of individual character strings.
    // The .map(Number) then converts each character string in the array into an actual number.    
    const digits = cardNumber.split('').map(Number);
    // Creates a new Set object from the 'digits' array.
    // A Set stores only unique values, meaning any duplicate digits in 'digits' will be ignored
    const uniqueDigits = new Set(digits);
    // Checks if the size of the 'uniqueDigits' Set is less than 2.
    // If there are fewer than 2 unique digits, it fails this condition.
    if (uniqueDigits.size < 2) {
        return false; 
    }
    // Accesses the character at the very last position of the original 'cardNumber'.
    // Then, it converts this last character string into a numeric value.
    const lastDigits = Number(cardNumber[cardNumber.length - 1]);
    // Uses the modulo operator (%) to check if the last digit is odd.
    // If the remainder when divided by 2 is not 0 (meaning it's 1), the digit is odd. 
    if (lastDigits % 2 !== 0) {
        return false;
    }
    // Calculates the total sum of all the numbers in the 'digits' array.
    // 'reduce' iterates: 'acc' (accumulator) stores the running total, 'digit' is the current number, and '0' is the starting sum.
    const someOfDigits = digits.reduce((acc, digit) => acc + digit, 0); 
    // Checks if the total sum of the digits is less than or equal to 16.
    // If the sum is less than or equal to 16, it fails this condition.
    if (someOfDigits <= 16) {
        return false;
    }
    // If all the previous checks pass, the card number is considered valid.
    // The function returns true, indicating that the card number meets all validation criteria.
    return true; 
    }

    module.exports = cardValidation;