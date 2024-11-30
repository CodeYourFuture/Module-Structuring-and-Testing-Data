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

console.assert(
  isPrime(1) === "1 is not a prime number",
  "Test failed: 1 should not be a prime number"
);
console.assert(
  isPrime(2) === "2 is a prime number",
  "Test failed: 2 should be a prime number"
);
console.assert(
  isPrime(3) === "3 is a prime number",
  "Test failed: 3 should be a prime number"
);
console.assert(
  isPrime(4) === "4 is not a prime number",
  "Test failed: 4 should not be a prime number"
);
console.assert(
  isPrime(17) === "17 is a prime number",
  "Test failed: 17 should be a prime number"
);
console.assert(
  isPrime(18) === "18 is not a prime number",
  "Test failed: 18 should not be a prime number"
);
