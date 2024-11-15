// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

// Function to check if a number is prime

function isPrime(num) {
    // If the number is less than 2, it's not prime
    if (num < 2) {
        return false;
    }
    
    // Check if num is divisible by any number between 2 and sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not prime
        }
    }
    return true; // num is prime
}


// Test cases to validate the isPrime function

console.log(isPrime(1));  // Should return false (1 is not prime)
console.log(isPrime(2));  // Should return true (2 is prime)
console.log(isPrime(3));  // Should return true (3 is prime)
console.log(isPrime(4));  // Should return false (4 is not prime)
console.log(isPrime(11)); // Should return true (11 is prime)
console.log(isPrime(15)); // Should return false (15 is not prime)
console.log(isPrime(17)); // Should return true (17 is prime)