function isCardValid(cardNumber) {
    if (cardNumber.length != 16) {
        return false;
    } /* this check goes before others, because if not-number characters present 
        there is no point to do other checks */ else if (isNaN(cardNumber)) {
        return false;
    } /* number also must be integer and positive*/
    else if (!Number.isInteger(Number(cardNumber)) || Number(cardNumber) < 0) {
        return false;
    } else if (checkIfStringHasOneTypeChar(cardNumber)) {
        return false;
    } else if (sumOfDigits(cardNumber) < 16) {
        return false;
    } else if (checkIfFinalNumberIsOdd(Number(cardNumber[cardNumber.length - 1]))) {
        return false;
    } else {
        return true;
    }
}
// separate functions in order to outsource some checks or counting
function sumOfDigits(cardNumber) {
    sum = 0;
    for (let i = 0; i < cardNumber.length - 1; i++) {
        sum = sum + Number(cardNumber[i]);
    }
    return sum;
}

function checkIfFinalNumberIsOdd(num) {
    if (num % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

function checkIfStringHasOneTypeChar(cardNumber) {
    let firstChar = cardNumber[0];
    for (let i = 1; i < cardNumber.length - 1; i++) {
        if (firstChar != cardNumber[i]) {
            return false;
        }
    }
    return true;
}

module.exports = isCardValid;