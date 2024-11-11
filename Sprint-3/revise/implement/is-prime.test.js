// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
    // Handle edge cases: numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    // Check divisibility up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, num is not prime
        }
    }
    return true; // No divisors found, num is prime
}

// Test cases
console.log(isPrime(1)); // Output: true (1 is not prime)
console.log(isPrime(5)); // Output: true (3 is prime)
console.log(isPrime(6)); // Output: false (4 is not prime)
console.log(isPrime(19)); // Output: true (17 is prime)
console.log(isPrime(18)); // Output: false (18 is not prime)
console.log(isPrime(39)); // Output: true (29 is prime)
