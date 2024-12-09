// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
// Function to check if a number is prime
function isPrime(number) {
    // first we handle special cases 
    // Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }
    
    // now we check for divisibility
    // We only need to check up to the square root of the number
    // we initialise i to 2 because it is the smallest that could divide another number 
    //i <= Math.sqrt(number): Keep checking until we reach the square root of the number
   
    for (let i = 2; i <= Math.sqrt(number); i++) {
    
     //If remainder is 0, it means the number is divisible
        
        if (number % i === 0) {
            return false;
        }
    }
    
    // Step 3: If we've made it through all checks, the number is prime
    return true;
}



  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
  });

  // Test non-prime numbers
  test('should return false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  // Test edge cases and large numbers
  test('should handle edge cases correctly', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });