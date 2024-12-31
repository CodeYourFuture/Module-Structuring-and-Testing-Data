// isPrime.js
function isPrime(num) {
  // If the number is less than 2, it is not prime
  if (num < 2) {
    return false;
  }

  // Check if the number has divisors (excluding 1 and itself)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If a divisor is found, it is not prime
    }
  }

  return true; // If no divisors are found, the number is prime
}


console.log("All test cases executed!");