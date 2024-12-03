function isPrime(num){
    if(num === 2){
        return `${num} is prime!`;
    }

    if(num <= 1 || num % 2 === 0){
        return `${num} is not prime`;
    }
    
    const limit = Math.sqrt(num)

    for(let i = 3; i <= limit; i+= 2 ){
        if(num % i === 0){
            return `${num} is not prime`;
        }
    }
    return `${num} is prime!`
}

module.exports = isPrime;

console.log(isPrime(23));