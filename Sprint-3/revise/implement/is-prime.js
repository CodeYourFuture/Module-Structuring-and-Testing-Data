function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    if (num === 2) {
        return true;  // 2 is prime
    }
    if (num % 2 === 0) {
        return false; // No even number greater than 2 is prime
    }

    // Check for factors from 3 to sqrt(num), skipping even numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; // Found a divisor, so not prime
        }
    }

    return true; // No divisors found, so it's prime
}

// Example usage:
console.log(isPrime(11));  // Output: true
console.log(isPrime(15));  // Output: false
console.log(isPrime(2));   // Output: true
console.log(isPrime(1));   // Output: false

module.exports=isPrime;