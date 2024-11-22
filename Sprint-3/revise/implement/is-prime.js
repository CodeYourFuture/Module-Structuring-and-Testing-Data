// This method is slow for large numbers due to checking all divisors up to 'num'.
// function isPrime(num) {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) count++;
//   }

//   if (count === 2) {
//     return `${num} is prime`;
//   } else {
//     return `${num} is not prime`;
//   }
// }

// console.log(isPrime(7230986));

/******************************************** */
// Optimized for large numbers by checking divisibility only up to the square root and skipping even numbers.

function isPrime(num) {
  if (num < 2) return `${num} is not prime `;
  if (num === 2) return `${num} is prime`;
  if (num % 2 === 0) return `${num} is not prime`;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return `${num} is not prime`;
    }
  }
  return `${num} is prime`;
}

console.log(isPrime(75456746876));
module.exports = isPrime;
