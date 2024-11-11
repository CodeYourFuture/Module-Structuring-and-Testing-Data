// Function to validate credit card number
function isCreditCardValid(cardNumber) {
    // Convert the card number to a string and then to an array of digits
    let numArray = cardNumber.toString().split('').map(Number);

    // Regular expression to check if the card number has only digits and is exactly 16 digits long
    var regex = new RegExp("^[0-9]{16}$");

    // Check if the card number matches the regex, has at least two different digits, 
    // the last digit is even, and the sum of the digits is greater than 16
    if (regex.test(cardNumber.toString()) && numArray.length === 16) {
        const uniqueDigits = new Set(numArray); // Create a set of unique digits from the array

        // Check if the last digit is even and if there are at least two different digits
        if (numArray[15] % 2 === 0 && uniqueDigits.size > 1) {
            let sum = numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum the digits
            if (sum > 16) {
                return true; // The credit card number is valid
            }
        }
    }

    // Return false if the conditions are not met
    return false;
}

// Test cases
console.log(isCreditCardValid(9999777788880000)); // Output: true (valid number)
console.log(isCreditCardValid(6666666666661666)); // Output: true (valid number)
console.log(isCreditCardValid(4444444444444444)); // Output: false (only one type of number)
console.log(isCreditCardValid(1111111111111110)); // Output: false (sum less than 16)
console.log(isCreditCardValid(6666666666666661)); // Output: false (odd final number)
console.log(isCreditCardValid('a92332119c011112')); // Output: false (invalid characters)
