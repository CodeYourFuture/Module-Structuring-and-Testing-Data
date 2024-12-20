// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime (num){
    if (num <= 1){
        return false
    } else if (num === 2){
        return true 
    } else if ((num > 2)) {
        let squareRootNum = Math.sqrt(num)
        for (let i = 2 ; i <= squareRootNum; i++ ) {
            if (num % i === 0) {
               return false;
            } 
         return true;
    }
}}



console.log(isPrime(9));
console.log(isPrime(7));
console.log(isPrime(8));


test('should check whether num is a prime number', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(17)).toBe(true);
  expect(isPrime(0)).toBe(false); 
});