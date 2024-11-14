function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

module.exports = isPrime;

//Feedback 
//PASS  ./isPrime.test.js
 // isPrime
   // ✓ returns false for numbers less than 2 (x ms)
   // ✓ returns true for small prime numbers (x ms)
    //✓ returns false for small non-prime numbers (x ms)
    //✓ returns true for larger prime numbers (x ms)
   // ✓ returns false for larger non-prime numbers (x ms)

//Test Suites: 1 passed, 1 total
//Tests:       5 passed, 5 total
//Snapshots:   0 total
//Time:        X s


