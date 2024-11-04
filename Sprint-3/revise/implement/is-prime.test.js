// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime



function isPrime(num) {
    // Handle edge cases
    if (num <= 1) 
        return 'Not prime'; // 0 and 1 are not prime numbers
    if (num === 2) 
        return 'Prime';    // 2 is the only even prime number

    // Check for factors from 2 up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'Not prime'; // If num is divisible by i, it's not prime
        }
    }
       return 'Prime'; // If no divisors found, it's prime
}

console.log(isPrime(7)); 
console.log(isPrime(10));
console.log(isPrime(1)); 
console.log(isPrime(2)); 
console.log(isPrime(17)); 
console.log(isPrime(-5)); 