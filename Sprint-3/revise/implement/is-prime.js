
function isPrime(num) {
    // Check if the input is less than 2, which is not prime
    if (num < 2) return false;

    // If the number is 2, it's prime
    if (num === 2) return true;

    // If the number is even and greater than 2, it's not prime
    if (num % 2 === 0) return false;

    // Calculate square root of the number once
    const sqrtNum = Math.sqrt(num);

    // Loop from 3 to the square root of the number, check only odd numbers
    for (let i = 3; i <= sqrtNum; i += 2) {
        // If num is divisible by any odd number in this range, it's not prime
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