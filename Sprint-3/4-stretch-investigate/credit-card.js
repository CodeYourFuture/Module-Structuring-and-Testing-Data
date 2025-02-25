function creditCardValidation(cardNumber) {
    const regex = /^[0-9]{16}$/; // implement a regex (Regular Expression) that checks if the card number is 16 digits long
    if (regex.test(cardNumber)){ // check if card number is 16 digits long
        return true; // return true if card is 16 digits long
    }

    else {
        // alert user to enter a valid card number if card is not up to 16 digit long
        return false;
    }
}

module.exports = creditCardValidation;