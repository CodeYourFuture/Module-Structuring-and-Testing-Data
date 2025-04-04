const isValidNumber = (cardNumber) => {
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        return false;
    }
    let allSame = true;
    for (let i = 1; i < 16; i++) {
        if (cardNumber[0] !== cardNumber[i]) {
            allSame = false;
            break;
        }
    }
    if (allSame) {
        return false;
    }
    let lastDigit = cardNumber.slice(-1);
    if (["1", "3", "5", "7", "9"].includes(lastDigit)){
        return false;
    }
    let sum = 0;
    digitsArray = cardNumber.split('');
    for (let i = 0; i < 16; i++) {
        sum += digitsArray[i];
    }
    if (sum <= 16) {
        return false;
    }
    return true;
}

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

module.exports = isValidNumber;