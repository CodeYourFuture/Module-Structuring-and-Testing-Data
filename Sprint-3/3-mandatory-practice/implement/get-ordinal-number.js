function getOrdinalNumber(num) {
    const theLastDigit = num % 10;
    const theFirstTwoDigits = num % 100;
    
    // We check if the number is 1, and if the number is 11, then we take the number and add the suffix "th" and return it, but if the number has any last two digits but 11, then we take the number and add the suffix "st" and return it. example: 111 => 111th, 21 => 21st
     if (theLastDigit === 1) {
        if(theFirstTwoDigits === 11) {
            return num + "th";
        }
        else{
            return num + "st";
        }
    }

    // We check if the number is 2, then we take the number and add the suffix "nd" and return it but if the number has any last two digits but 12, then we take the number and add the suffix "th" and return it. example: 112 => 112th, 22 => 22nd
    else if (theLastDigit === 2) {
        if (theFirstTwoDigits === 12) {
            return num + "th";
        }
        else{
            return num + "nd";
        }
    }

    // We check if the number is 3, then we take the number and add the suffix "rd" and return it but if the number has any last two digits but 13, then we take the number and add the suffix "th" and return it. example: 113 => 113th, 23 => 23rd
    else if (theLastDigit === 3) {
        if(theFirstTwoDigits === 13) {
            return num + "th";
        }
        else{
            return num + "rd";
        }
    }

    //Any other number that doesn't meet the above conditions, we take the number and add the suffix "th" and return it. example: 4 => 4th, 5 => 5th
    else {
        return num + "th";
    }
}

module.exports = getOrdinalNumber;