function cardNumberValidator(cardNumber) {
    let numberInArray = cardNumber.toString().split(''); // put the card number in array.
    // return numberInArray;
    // let lengthOfCard = cardNumber.toString().length; // get the length of the array but first put the card number in string
    
    if (numberInArray.length !== 16) {
        return false;
    }
    if (Number.isNaN(Number(cardNumber))) {
        return false;
    }
    return true;
        
    // Check 2: At least two different digits
    // let firstDigit = numberInArray[0]; 
    // for (let i = 1; i < lengthOfCard; i++ ) { // compare the value
    //     if (numberInArray[i] !== firstDigit) {
    //         return true;
    //     }
    //     else return false
    // }
    // return false;
    
}

console.log(cardNumberValidator("111111a111111111"));
module.exports = cardNumberValidator;

// console.log(cardNumberValidator("1234567890123456"))
/*
pseudocode:
create a function to validate the card number.
Number must be 16 digits, 
All numbers must be numbers.
You must have at least two different digits represented (all of the digits cannot be the same).
The final digit must be even.
The sum of all the digits must be greater than 16.
*/
