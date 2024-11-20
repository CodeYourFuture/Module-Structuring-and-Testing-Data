// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

test('returns false for numbers less than or equal to 1', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
});

test('returns true for the only even prime number (2)', () => {
    expect(isPrime(2)).toBe(true);
});

test('returns false for even numbers greater than 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(100)).toBe(false);
});

test('returns true for small prime numbers', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
});

test('returns false for small non-prime numbers', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
});

test('returns true for larger prime numbers', () => {
    expect(isPrime(29)).toBe(true);
    expect(isPrime(97)).toBe(true);
    expect(isPrime(101)).toBe(true);
});

test('returns false for larger non-prime numbers', () => {
    expect(isPrime(100)).toBe(false);
    expect(isPrime(200)).toBe(false);
    expect(isPrime(999)).toBe(false);
});