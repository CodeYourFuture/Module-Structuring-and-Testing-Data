function validateCard (cardNumber) {
    const cardString = cardNumber.toString(); //Converts to a string so that length can be processed
    
    
    if(cardString.length !== 16 || !/^\d+$/.test(cardString)) { //Handles for digits being less than 16 and that all are digits using a regex
    return false;
    }
    
    const uniqueDigits = new Set(cardString); //Set creates a set of unique digits
    if(uniqueDigits.size < 2) { //.size is a property of Set and checks for at least 2 different digits
    return false; 
    }

    const lastDigit = parseInt(cardString.slice(-1)); //Isolate the last digit
    if (lastDigit % 2 !== 0) { //Check if the last digit is not divisible by 2 which means it is not even
    return false;
    }

//Now to add all the digits
    let sum = 0; //Initialises variable and sets it to 0
    let i = 0;//Initialises variable and sets it to 0
    while (i < cardString.length) { //While loop will continue while i is shorter than the string length
        sum += parseInt(cardString[i]); //Shorthand for sum = sum + parseInt, which converts each character into an integer
        i++; //Increments count by 1
    }

    if(sum<=16) {
    return false; //Sum must be more than 16 to be valid
    }

    return true; //If all conditions have been met

}

module.exports = {validateCard};