// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is a prime number

    const sqrtNum = Math.sqrt(num); 
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) return false; 
    }

    return true; 
}

// Example Usage
console.log(isPrime(2));   // true
console.log(isPrime(10));  // false
console.log(isPrime(13));  // true