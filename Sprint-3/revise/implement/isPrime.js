function isPrime(num){
    /*
    if(num%num==0){
        return true
    } else {
        return false
    } 
    // looks like this logic doesnt work. back to the drawing board. so it fails because the condition does not limit the divisor.
    */

    
        if (num <= 1) {
            return false;
        } // add this for only positive integers
        for (let i = 2; i <= num/2; i++) { // change to a for loop. start at lowest prime 2, stop at num (but maybe makes more sense to be num/2).
            if (num % i === 0 && i !== num) { // embed a if that checks for the match
                return false;
            }
        }
        return true;
    }

    module.exports = isPrime;

// a quick test. but lets write some in jest
const num = 22568;
console.log(isPrime(num));