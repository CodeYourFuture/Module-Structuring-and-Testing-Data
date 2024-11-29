function isPrime(num){
    if(num <= 1){
        return `${num} is not prime`;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++ ){
        if(num % i === 0){
            return `${num} is not prime`;
        }
    }
    return `${num} is prime!`
}

module.exports = isPrime;

console.log(isPrime(2));