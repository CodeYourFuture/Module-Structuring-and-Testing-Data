const isValidNumber = (cardNum) => {
    const StrCardNum = cardNum.toString();
    if (StrCardNum.length !== 16 || !/^\d+$/.test(StrCardNum)) {
        return false;
    }
    let allSame = true;
    for (let i = 1; i < 16; i++) {
        if (StrCardNum[0] !== StrCardNum[i]) {
            allSame = false;
            break;
        }
    }
    if (allSame) {
        return false;
    }
    if (cardNum % 2 !== 0) {
        return false;
    }
    let sum = 0;
    digitsArray = StrCardNum.split('');
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