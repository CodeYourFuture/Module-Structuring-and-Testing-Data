//Function should return true if a number is prime and false if it is not.

function isPrime(num) {
    const number = Number(num); //Ensures that input is a number

    if (isNaN(number) || num === null || num === undefined) { //handles for non numbers, null and undefined inputs
        throw new Error("Please enter a number");
    }
    
    const integerNumber = Math.floor(number); //After checking for invalid inputs, it converts number inputs to an integer

    if (integerNumber <= 1 ) {
        return false; //1 is not a prime number
    }

    if (integerNumber <= 3) {
        return true; //2 and 3 are prime numbers
    }

    if (integerNumber % 2 === 0 || integerNumber % 3 === 0) {
        return false; //Numbers divisible by 2 or 3 with no remainder are prime numbers 
    }

    return true; //All other instances are prime numbers 

}
module.exports = {isPrime};