// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num){
    if (num <= 1) return false; 
    else if (num <= 3) return true;
    else if(num % 2 == 0 || num % 3 == 0){
        return false;
    }
    else if (num % 1 == 0 && num % num == 0){
        return true
    }
}

console.log(isPrime(277473));