// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
  if (num < 2) {
    return `${num} is not a prime number`;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is a prime number`;
}

console.log(isPrime(1)); // Output: "1 is not a prime number"
console.log(isPrime(2)); // Output: "2 is a prime number"
console.log(isPrime(3)); // Output: "3 is a prime number"
console.log(isPrime(4)); // Output: "4 is not a prime number"
console.log(isPrime(17)); // Output: "17 is a prime number"
console.log(isPrime(18)); // Output: "18 is not a prime number"
