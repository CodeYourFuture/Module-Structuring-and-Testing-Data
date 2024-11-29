// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime (num){
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

describe("isPrime", () => {
    test("return true for prime numbers", () => {
        expect(isPrime(5)).toBe(true);
        expect(isPrime(11)).toBe(true);
        expect(isPrime(13)).toBe(true);
    });

    test("return false for non-prime numbers", () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(6)).toBe(false);
    });

    test("handle edge cases", () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-2)).toBe(false);
      expect(isPrime(1)).toBe(false);
    });

    test("returns true for large prime numbers", () => {
      expect(isPrime(97)).toBe(true);
      expect(isPrime(101)).toBe(true);
    });

    test("returns false for large non-prime numbers", () => {
      expect(isPrime(100)).toBe(false);
      expect(isPrime(1024)).toBe(false);
    });


});