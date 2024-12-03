// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

//this will be recursive.
// this will return a boolean of true or false. 
// can use  if condition.
// write some tests for this using known primes

/* Tests

objective: test if a number is prime using the isPrime(num) function
input: 2
test. console.assert(isPrime(2));
expected output: true

*/
//import isPrime from './isPrime';

const isPrime = require('./isPrime'); // Import the isPrime function

describe('isPrime function', () => {
    // Test case 1: Input 1 should return false
    it('should return false for 1', () => {
        expect(isPrime(1)).toBe(false);
    });

    // Test case 2: Input 2 should return true
    it('should return true for 2', () => {
        expect(isPrime(2)).toBe(true);
    });

    // Test case 3: Input 0 should return false
    it('should return false for 0', () => {
        expect(isPrime(0)).toBe(false);
    });

    // Test case 4: Input -1 should return false
    it('should return false for -1', () => {
        expect(isPrime(-1)).toBe(false);
    });

    // Test case 5: Input 25 should return false
    it('should return false for 25', () => {
        expect(isPrime(25)).toBe(false);
    });

    // Test case 6: Input 23 should return true
    it('should return true for 23', () => {
        expect(isPrime(23)).toBe(true);
    });

    // Test case 7: Input 37 should return true
    it('should return true for 37', () => {
        expect(isPrime(37)).toBe(true);
    });

    // Test case 8: Input 48 should return false
    it('should return false for 48', () => {
        expect(isPrime(48)).toBe(false);
    });

    // Test case 9: Input 53 should return true
    it('should return true for 53', () => {
        expect(isPrime(53)).toBe(true);
    });

    // Test case 10: Input 100 should return false
    it('should return false for 1000020', () => {
        expect(isPrime(1000020)).toBe(false);
    });

    // Test case 11: Input 997 should return true
    it('should return true for 997', () => {
        expect(isPrime(997)).toBe(true);
    });
});