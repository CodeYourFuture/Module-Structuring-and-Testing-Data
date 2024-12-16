//it is positive number
// a number that can only be divided by itself and 1 without remainders
// all are odd except 2


function isPrimeNumber(number) {
    if (number <= 1) {
        throw new Error('There is no negative prime number or zero as a prime number.');
    }

    if (number === 2) {
        return true;
    }

    if (number % 2 === 0) {
        return false;
    }

    for (let index = 3; index <= Math.sqrt(number); index += 2) {
        if (number % index === 0) {
            return false;
        }
    }

    return true;
}

module.exports = isPrimeNumber;
