function getOrdinalNumber (num) {
    const number = Number(num); //This converts the input into a number to be handled going forward
    
    if (isNaN(number) || number <= 0 || !Number.isInteger(number)) { //Handles for when the input num is not a number or is negative or is not an integer
        throw new Error("Please enter a valid number");
    }

   
//This will isolate the last character and last two characters to handle what to add to the end of the returned string.
//1 will return 1st, 2 will return 2nd but 11, 12 and 13 with return 11th, 12th and 13th    
    const findLastCharacter = number % 10; //The remainder of the division is the last character
    const findLastTwoCharacters = number % 100; //The remainder of the division are the last two characters

    if (findLastTwoCharacters >= 11 && findLastTwoCharacters <= 13) {
        return `${number}th`; //For numbers 11 to 13
    }

    switch (findLastCharacter) { //switch is better than if/else to account for all numbers ending in 1, 2 or 3.
        case 1: return `${number}st`;
        case 2: return `${number}nd`;
        case 3: return `${number}rd`;
        default: return `${number}th`; //default will run when numbers that are not 11, 12 and 13 but all other numbers such as 4.
    }
    
}
module.exports = {getOrdinalNumber};