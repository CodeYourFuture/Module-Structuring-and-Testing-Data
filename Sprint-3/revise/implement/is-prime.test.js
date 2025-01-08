// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime
function isPrime(num){
    // check num is not negative & it is smaller than 2
    // check num is equal 2, it is exception 
    // check num is even
    if (num < 2 || (num > 2  && num % 2 === 0 )){
      return `${num} is not prime`;
    }

    // check loop from 3 to the square of the num, check only odd numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {      //// If num is divisible by any odd number in this range, it's not prime
      return `${num} is not prime`;
        }
    }
    ///// If num is not divisible by any odd number in this range, it's prime
    return `${num} is prime`;
}

console.log(isPrime(7));  // `7 is prime`
console.log(isPrime(10)); // `10 is not prime`
console.log(isPrime(1));  // `1 is not prime`
console.log(isPrime(2));  // `2 is prime`
console.log(isPrime(0));  // `0 is not prime`
console.log(isPrime(4));  // `4 is not prime`

//////////////////////>>>>>>>>>>>>>>> Test with jest syntax <<<<<<<<<<<<<<////////////////////////////

describe("isPrime function", () => {
  test("result for numbers less than 2", () => {
    expect(isPrime(1)).toBe("1 is not prime ");
    expect(isPrime(0)).toBe("0 is not prime ");
    expect(isPrime(-3)).toBe("-3 is not prime ");
  });

  test("correct result for number 2", () => {
    expect(isPrime(2)).toBe("2 is prime");
  });

  test("correct result for even numbers greater than 2", () => {
    expect(isPrime(12)).toBe("12 is not prime");
    expect(isPrime(20)).toBe("20 is not prime");
  });

  test("check result for other numbers", () => {
    expect(isPrime(3)).toBe("3 is prime");
    expect(isPrime(5)).toBe("5 is prime");
    expect(isPrime(7)).toBe("7 is prime");
    expect(isPrime(13)).toBe("13 is prime");
    expect(isPrime(9)).toBe("9 is not prime");
    expect(isPrime(15)).toBe("15 is not prime");
  });

});