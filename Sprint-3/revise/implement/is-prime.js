function isPrime(num) {
    // Check if num is less than or equal to 1
    if (num <= 1) return false;

    // Special case for 2
    if (num === 2) return true;

    // Skip even numbers greater than 2
    if (num % 2 === 0) return false;

    // Calculate the square root of num once
    const sqrtNum = Math.sqrt(num);

    // Check divisors starting from 3, incrementing by 2 (only odd numbers)
    for (let i = 3; i <= sqrtNum; i += 2) {
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