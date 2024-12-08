// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require('./is-prime');

test('checks if 7 is a prime number', () => {
    expect(isPrime(7)).toBe(true); 
});