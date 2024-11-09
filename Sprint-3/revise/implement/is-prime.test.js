// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime (num){
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(3));
console.log(isPrime(1));
console.log(isPrime(4));