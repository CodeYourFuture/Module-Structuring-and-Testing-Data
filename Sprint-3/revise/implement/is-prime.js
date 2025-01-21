//it is positive number
// a number that can only be divided by itself and 1 without remainders
// all are odd except 2


function isPrimeNumber(number) {
    if (number <= 1) {
        return false; // Numbers ≤ 1 are not prime
    }

    if (number === 2) {
        return true; // 2 is the only even prime number
    }

    if (number % 2 === 0) {
        return false; // Even numbers greater than 2 are not prime
    }

    // Calculate the square root of the number once
    const sqrtNumber = Math.sqrt(number);

    for (let index = 3; index <= sqrtNumber; index += 2) {
        if (number % index === 0) {
            return false; 
        }
    }

    return true; 
}



module.exports = isPrimeNumber;
