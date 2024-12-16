// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require('./is-prime');

test('checks if 7 is a prime number', () => {
    expect(isPrime(7)).toBe(true); 
    expect(isPrime(0)).toBe(false); 
    expect(isPrime(1)).toBe(false);  
    expect(isPrime(2)).toBe(true);  
    expect(isPrime(3)).toBe(true);   
    expect(isPrime(5)).toBe(true);  
    expect(isPrime(6)).toBe(false);  
    expect(isPrime(23)).toBe(true); 
    expect(isPrime(24)).toBe(false); 
});
