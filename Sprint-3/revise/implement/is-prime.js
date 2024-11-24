// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

//A prime number is a natural number greater than 1 that has
// no positive divisors other than 1 and itself.

function isPrime(num) {
  if (num <= 1) {
    // 1 is not prime number
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
module.exports = isPrime;
