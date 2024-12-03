// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require("./isPrime");


test("Checks if the number 2 is a prime number", () => {
    expect(isPrime(2)).toBe("2 is prime!");

});

test("Checks if the number 3 is a prime number", () => {
    expect(isPrime(3)).toBe("3 is prime!");

});

test("Checks if the number 4 is a prime number", () => {
    expect(isPrime(4)).toBe("4 is not prime");

});

test("Checks if the number 6 is a prime number", () => {
    expect(isPrime(6)).toBe("6 is not prime");

});

test("Checks if the number 7 is a prime number", () => {
    expect(isPrime(7)).toBe("7 is prime!");

});

test("Checks if the number 9 is a prime number", () => {
    expect(isPrime(9)).toBe("9 is not prime");

});

test("Checks if the number 13 is a prime number", () => {
    expect(isPrime(13)).toBe("13 is prime!");

});

test("Checks if the number 23 is a prime number", () => {
    expect(isPrime(23)).toBe("23 is prime!");

});

test("Checks if the number 50 is a prime number", () => {
    expect(isPrime(50)).toBe("50 is not prime");

});

test("Checks if the number 103 is a prime number", () => {
    expect(isPrime(103)).toBe("103 is prime!");

});