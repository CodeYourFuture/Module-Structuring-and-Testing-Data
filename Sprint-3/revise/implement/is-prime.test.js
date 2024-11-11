// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
______________________________________SOLUTION_______________________________________________________

// Function to check if a number is prime
function isPrime(num) {
    // Special case: if num is less than 2, it's not prime
    if (num < 2) {
      return false;
    }
  
    // Loop from 2 up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If num is divisible by any number between 2 and sqrt(num), it's not prime
      if (num % i === 0) {
        return false;
      }
    }
  
    // If no divisors found, num is prime
    return true;
  }

  /*
  Explanation of Key Lines
  Square Root Check: for (let i = 2; i <= Math.sqrt(num); i++) reduces unnecessary iterations, as factors repeat beyond the square root.
  Divisibility Check: if (num % i === 0) returns false immediately if a divisor is found.
  Return Value: If no divisors are found, return true to indicate num is prime.
  Example Test Cases
  To test isPrime, use the following cases:
  */
  
  
  console.log(isPrime(2));    // true (2 is prime)
  console.log(isPrime(3));    // true (3 is prime)
  console.log(isPrime(4));    // false (4 is divisible by 2)
  console.log(isPrime(5));    // true (5 is prime)
  console.log(isPrime(16));   // false (16 is divisible by 2 and 4)
  console.log(isPrime(17));   // true (17 is prime)
  console.log(isPrime(19));   // true (19 is prime)
  console.log(isPrime(20));   // false (20 is divisible by 2 and 5)
  console.log(isPrime(1));    // false (1 is not prime)
  console.log(isPrime(0));    // false (0 is not prime)

//  This function is efficient and accurately determines if a number is prime, covering cases from small numbers up to larger integers efficiently.