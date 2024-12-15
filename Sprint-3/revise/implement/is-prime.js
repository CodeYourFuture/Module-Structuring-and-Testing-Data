//Function should return true if a number is prime and false if it is not.

function isPrime(num) {
    const number = Math.floor(Number(num)); //Ensures that input is a number and that it is an integer

    if (isNaN(number) || number === null || num === undefined) { //handles for non numbers, null and undefined inputs
        throw new Error("Please enter a number");
    }

    if (number <= 1 ) {
        return false; //1 is not a prime number
    }

    if (number <= 3) {
        return true; //2 and 3 are prime numbers
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false; //Numbers divisible by 2 or 3 with no remainder are prime numbers 
    }

    return true;

}
module.exports = {isPrime};