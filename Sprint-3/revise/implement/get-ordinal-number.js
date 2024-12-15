function getOrdinalNumber (num) {
    if (isNaN(num) || num <= 0) { //Handles for when the input num is not a number or is negative
        return "Please enter a valid number";
    }

    if (num === null || num === undefined) {
        throw new Error("Please enter a valid number") //This handles null and undefined inputs   
        } 

//This will isolate the last character and last two characters to handle what to add to the end of the returned string.
//1 will return 1st, 2 will return 2nd but 11, 12 and 13 with return 11th, 12th and 13th    
    const findLastCharacter = num % 10; //The remainder of the division is the last character
    const findLastTwoCharacters = num % 100; //The remainder of the division are the last two characters

    if (findLastTwoCharacters >= 11 && findLastTwoCharacters <= 13) {
        return '${numb}th'; //For numbers 11 to 13
    }

    switch (findLastCharacter) { //switch is better than if/else to account for all numbers ending in 1, 2 or 3.
        case 1: return '${num}st';
        case 2: return '${num}nd';
        case 3: return '${num}rd';
        default: return '${num}th'; //default will run when numbers that are not 11, 12 and 13 but all other numbers such as 4.
    }
    
}
module.exports = {getOrdinalNumber};