function isValidCreditCard(cardNumber) {
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }

    if (new Set(cardNumber.split('')).size === 1) {
        return false;
    }

    if (parseInt(cardNumber.charAt(15)) % 2 !== 0) {
        return false;
    }

    const sum = cardNumber.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    if (sum <= 16) {
        return false;
    }

    return true;
}

module.exports = isValidCreditCard;
