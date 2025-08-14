


function cardNumberValidator(cardNumber) {

    let eachDigit = cardNumber.split('');

    //Validation for the card number to be 16 digits
    if (cardNumber.length !== 16 && Number(cardNumber) !== NaN) {
        return 'Invalid card number';
    }

    //There is a non-numeric character in the card number
    //Validation for the sum of all the digits to be greater than 16
    else if(isNaN(Number(cardNumber))) {
        return false;
    }
    
    //Validation for sum of all the digits to be more than 16
    else if((eachDigit.reduce((acc , digit) => acc + parseInt(digit), 0)) < 17){

        return 'The sum of the digits should be more than 17'
    }
    
// 12345  [1, 2, 3, 4, 5] REDUCE = 1+ 2+3 + 4 + 5 = 15
    //Validation for numbers that are the same
    else if(eachDigit.every(digit => digit === eachDigit[0]))
        {   
            return 'We can not have the same numbers in the card number';
        }

    //Validation for the last digit to be even
    else if(eachDigit[15]%2 !== 0) {
        return 'The last digit should be even';
    }

    // Everything else is a validated card number
    else{
        return true;
    }

    
}

module.exports = cardNumberValidator;