// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime


/**
 * Function to check if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} True if num is prime, false otherwise.
 */
function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) {
        return false;
    }

    // The number 2 is a prime number
    if (num === 2) {
        return true;
    }

    // Eliminate even numbers greater than 2
    if (num % 2 === 0) {
        return false;
    }

    // Check for divisors from 3 to the square root of num
    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) { // Increment by 2 to skip even numbers
        if (num % i === 0) {
            return false;
        }
    }

    // If no divisors were found, the number is prime
    return true;
}

// Example Usage
console.log(isPrime(1));  // Output: false
console.log(isPrime(2));  // Output: true
console.log(isPrime(17)); // Output: true
console.log(isPrime(18)); // Output: false
