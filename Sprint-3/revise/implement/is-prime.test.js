// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

// Import the function to test
const isPrime = require('./is-prime');

describe('isPrime function', () => {
    test('should return false for numbers less than 2', () => {
        expect(isPrime(-1)).toBe(false);
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

    test('should handle larger prime numbers', () => {
        expect(isPrime(101)).toBe(true);
        expect(isPrime(103)).toBe(true);
        expect(isPrime(107)).toBe(true);
    });

    test('should handle larger non-prime numbers', () => {
        expect(isPrime(100)).toBe(false);
        expect(isPrime(102)).toBe(false);
        expect(isPrime(104)).toBe(false);
    });

    // New test for odd composite numbers
    test('should return false for odd composite numbers', () => {
        expect(isPrime(101 * 13)).toBe(false);  // 101 * 13 = 1313, composite
        expect(isPrime(15)).toBe(false);        // 15 = 3 * 5, composite
        expect(isPrime(21)).toBe(false);        // 21 = 3 * 7, composite
        expect(isPrime(33)).toBe(false);        // 33 = 3 * 11, composite
    });

});