function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

module.exports = isPrime;

//Feedback 
 //PASS  ./is-prime.test.js
  //isPrime
   // √ should return false for numbers less than or equal to 1 (4 ms)
    //√ should return true for prime numbers (2 ms)
    //√ should return false for non-prime numbers (3 ms)

//Test Suites: 1 passed, 1 total
//Tests:       3 passed, 3 total
//Snapshots:   0 total
//Time:        0.748 s, estimated 2 s
//Ran all test suites matching /is-prime.test.js/i.