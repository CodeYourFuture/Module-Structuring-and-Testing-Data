function cardValidator(cardNum) {

    regExpTest = /[0-9]{16}/.test(cardNum); // true if cardNum is 16 numbers

    result = regExpTest;

    return result;
}

module.exports = cardValidator;