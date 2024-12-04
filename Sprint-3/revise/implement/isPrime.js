function isPrime(num){
    if(num === 2){
        return true;
    }

    if(num <= 1 || num % 2 === 0){
        return false;
    }
    
    const limit = Math.sqrt(num)

    for(let i = 3; i <= limit; i+= 2 ){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

module.exports = isPrime;

console.log(isPrime(23));