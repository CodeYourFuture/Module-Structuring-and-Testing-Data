// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime=require('./isPrime')
 describe('isPrime',()=>{

    test('returns false for non-prime numbers',()=>{
        expect(isPrime(1)).toBe(false); 
        expect(isPrime(0)).toBe(false); 
        expect(isPrime(4)).toBe(false); 
        expect(isPrime(6).toBe(false))
        expect(isPrime(9)).toBe(false); 
        expect(isPrime(100)).toBe(false); 
    })
    test('returns true for prime numbers',()=>{
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(97)).toBe(true);
    })
    test('handles invalid input',()=>{
        expect(isPrime(-7)).toBe(false); 
        expect(isPrime(1.5)).toBe(false); 
        expect(isPrime('text')).toBe(false); 
        expect(isPrime(NaN)).toBe(false); 
        expect(isPrime(Infinity)).toBe(false); 
    })
 })