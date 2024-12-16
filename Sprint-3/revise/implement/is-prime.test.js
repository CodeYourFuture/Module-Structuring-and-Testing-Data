// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
// isPrimeNumber.test.js
// @jest-environment node

const isPrimeNumber = require('./is-prime');

describe('isPrimeNumber', () => {
    // for numbers ≤ 1
    it('should throw an error for numbers less than or equal to 1', () => {
        expect(() => isPrimeNumber(-5)).toThrow('There is no negative prime number or zero as a prime number.');
        expect(() => isPrimeNumber(0)).toThrow('There is no negative prime number or zero as a prime number.');
        expect(() => isPrimeNumber(1)).toThrow('There is no negative prime number or zero as a prime number.');
    });

    // Test cases for prime numbers
    it('should return true for prime numbers', () => {
        expect(isPrimeNumber(2)).toBe(true);
        expect(isPrimeNumber(3)).toBe(true);
        expect(isPrimeNumber(17)).toBe(true);
    });

    // Test cases for non-prime numbers (greater than 1)
    it('should return false for non-prime numbers', () => {
        expect(isPrimeNumber(4)).toBe(false); 
        expect(isPrimeNumber(16)).toBe(false);
        expect(isPrimeNumber(9)).toBe(false); 
    });
});

