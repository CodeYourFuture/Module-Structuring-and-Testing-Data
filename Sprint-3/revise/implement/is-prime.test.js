// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(17));
console.log(isPrime(21));
console.log(isPrime(2));
console.log(isPrime(1)); 