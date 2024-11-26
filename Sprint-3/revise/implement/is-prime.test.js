// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num){
 if(num <= 1){
  return false
 }
 for(let i = 2; i < num; i++){
    if(num % i === 0){
        return false
    }
 }
 return true
}
console.log(isPrime(11))
test("find function wich take 1 parameter and should check if the parameter is prime,and return boolean",() =>{
  expect(isPrime(11)).toBe(true)
})