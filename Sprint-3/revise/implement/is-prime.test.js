// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
  if (num < 2) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is the only even prime
  if (num % 2 === 0) return false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false; // Not prime if divisible by i
  }

  return true;
}

// Data for tests
// 30 prime number between 1 and 500, even/random spread
const primeArray = [
  2, 3, 7, 11, 31, 41, 43, 47, 127, 137, 139, 163, 179, 193, 211, 241, 263, 293,
  313, 317, 331, 347, 349, 419, 431, 433, 467, 479, 491, 499,
];

// 100 non-prime number between 1 and 500, even/random spread
const nonPrimeArray = [
  1, 4, 8, 9, 18, 21, 24, 33, 36, 39, 44, 70, 74, 76, 104, 106, 111, 112, 121,
  123, 125, 126, 130, 132, 174, 178, 182, 185, 186, 190, 192, 198, 200, 202,
  204, 205, 207, 208, 209, 210, 212, 213, 219, 220, 221, 222, 225, 226, 230,
  231, 232, 282, 286, 287, 290, 292, 294, 297, 298, 299, 300, 301, 303, 304,
  306, 308, 350, 351, 354, 362, 364, 368, 369, 372, 377, 378, 381, 382, 407,
  408, 413, 414, 417, 420, 422, 426, 434, 435, 438, 441, 445, 446, 468, 469,
  474, 475, 485, 488, 498, 500,
];

describe("isPrime Quick Tests", () => {
  test("Prime numbers return true", () => {
    primeArray.map((num) => expect(isPrime(num)).toBe(true));
  });

  test("Non-prime numbers return false", () => {
    nonPrimeArray.map((num) => expect(isPrime(num)).toBe(false));
  });
});

// I was trying to find a way so that these tests would run conditionally.
// If the quick tests had a fail, these tests would then run.
// Unfortunately, I couldn't figure it out
describe("isPrime Long Tests", () => {
  describe("Prime numbers return true", () => {
    test.each(primeArray)("%i", (num) => {
      expect(isPrime(num)).toBe(true);
    });
  });

  describe("Non-prime numbers return false", () => {
    test.each(nonPrimeArray)("%i", (num) => {
      expect(isPrime(num)).toBe(false);
    });
  });
});
