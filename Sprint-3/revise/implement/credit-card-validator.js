/*
- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.
 */
/* - Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
*/
function validateCreditCard(cardNumber) {
    if (!/^\d{16}$/.test(cardNumber)){ // check if the input a string with 16 digits
        return false;
    }
    const digits = cardNumber.split("").map(Number);
    // string => array of numbers (easier to process)

    const uniqueDigits = new Set(digits);
    if (uniqueDigits.size < 2){
        return false;
    }
    if (digits[digits.length - 1] % 2 !== 0) {
        return false;
    }
    const sum = digits.reduce((sum, digit) => sum + digit, 0);
    if (sum <= 16){
        return false;
    }

    return true; // if all conditions pass
}

console.log(validateCreditCard("9888111188880444"));
console.log(validateCreditCard("0000000000000000"));
