function validateCreditCard(num){
    num = String(num);
    // check if password is 16 digits
    if (num.length !== 16 || !/^\d+$/.test(num)) {
        return false;
    }
    // check if password contains at least 2 different digits
    const firstDigit = num[0];
    let hasDifferentDigit = false;
    for (let i = 1; i < num.length; i++) {
        if (num[i] !== firstDigit) {
            hasDifferentDigit = true;
            break;
        }
    } 
    if (!hasDifferentDigit) {
        return false;
    } else if (parseInt(num[num.length - 1]) % 2 !== 0) { // Check if the last digit is even
        return false;
    }

    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    // check if the sum is greater than 16
    if (sum <= 16) {
        return false;
    }
    return true;
}

let cardValidation = validateCreditCard(6666666666661666);
console.log(cardValidation);