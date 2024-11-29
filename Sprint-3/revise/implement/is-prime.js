
function isPrime(num) {
    // Check if the input is less than 2, which is not prime
    if (num < 2) return false;

    // Loop from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by any number in this range, it's not prime
        if (num % i === 0) return false;
    }

    // If no divisors were found, num is prime
    return true;
}

// Example usage:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false

module.exports = isPrime;