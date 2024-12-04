// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime


const isPrime = require('./is-prime.js');

describe('isPrime', () => {
    
    test('should return false for numbers less than or equal to 1', () => {
        expect(isPrime(0)).toBe(false);
        expect(isPrime(1)).toBe(false);
    });

    test('should return true for prime numbers', () => {
        expect(isPrime(2)).toBe(true); 
        expect(isPrime(3)).toBe(true); 
        expect(isPrime(5)).toBe(true); 
        expect(isPrime(7)).toBe(true); 
        expect(isPrime(11)).toBe(true); 
        expect(isPrime(13)).toBe(true); 
    });

    test('should return false for non-prime numbers', () => {
        expect(isPrime(4)).toBe(false); 
        expect(isPrime(6)).toBe(false); 
        expect(isPrime(8)).toBe(false); 
        expect(isPrime(9)).toBe(false); 
        expect(isPrime(10)).toBe(false); 
    });

    test('should return false for even numbers greater than 2', () => {
        expect(isPrime(20)).toBe(false); 
        expect(isPrime(100)).toBe(false); 
        expect(isPrime(1024)).toBe(false); 
    });

    test('should return true for large prime numbers', () => {
        expect(isPrime(29)).toBe(true); 
        expect(isPrime(97)).toBe(true); 
        expect(isPrime(997)).toBe(true); 
    });

    test('should return false for large non-prime numbers', () => {
        expect(isPrime(1000000)).toBe(false); 
        expect(isPrime(999999)).toBe(false); 
    });
});
