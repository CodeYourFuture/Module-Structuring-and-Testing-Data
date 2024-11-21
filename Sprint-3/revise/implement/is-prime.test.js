// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

//Answer:
const isPrime = require('./is-prime');

describe('isPrime function', () => {
    test('should return false for numbers less than or equal to 1', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-5)).toBe(false);
    });

    test('should return true for the only even prime number (2)', () => {
        expect(isPrime(2)).toBe(true);
    });

    test('should return true for odd prime numbers', () => {
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(17)).toBe(true);
    });

    test('should return false for even non-prime numbers greater than 2', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(10)).toBe(false);
    });

    test('should return false for odd non-prime numbers', () => {
        expect(isPrime(9)).toBe(false);
        expect(isPrime(15)).toBe(false);
        expect(isPrime(21)).toBe(false);
    });

    test('should handle large prime and non-prime numbers', () => {
        expect(isPrime(101)).toBe(true); // Large prime
        expect(isPrime(100)).toBe(false); // Large non-prime
    });
});

