// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
    if (num <= 1 || num % 2 === 0) return false; 
    if (num === 2) return true; 
    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) { 
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log(isPrime(11))
test("find function wich take 1 parameter and should check if the parameter is prime,and return boolean",() =>{
  expect(isPrime(11)).toBe(true);
  expect(isPrime(25)).toBe(false);
  expect(isPrime(29)).toBe(true);
})