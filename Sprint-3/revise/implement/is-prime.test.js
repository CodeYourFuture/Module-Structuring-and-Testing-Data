// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

//Answer:
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

module.exports = isPrime; 
