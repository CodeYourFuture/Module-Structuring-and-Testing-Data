function isPrime(num){
    if(num <= 1){
        return `${num} is not prime`;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++ ){
        if(num % i === 0){
            return `${num} in not prime`;
        }
    }
    return `${num} is prime!`
}

console.log(isPrime(5));