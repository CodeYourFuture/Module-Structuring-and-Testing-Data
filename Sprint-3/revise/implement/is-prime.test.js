// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require("./isPrime");


test("Checks if the number 2 is a prime number", () => {
    expect(isPrime(2)).toBe(true);

});

test("Checks if the number 3 is a prime number", () => {
    expect(isPrime(3)).toBe(true);

});

test("Checks if the number 4 is a prime number", () => {
    expect(isPrime(4)).toBe(false);

});

test("Checks if the number 6 is a prime number", () => {
    expect(isPrime(6)).toBe(false);

});

test("Checks if the number 7 is a prime number", () => {
    expect(isPrime(7)).toBe(true);

});

test("Checks if the number 9 is a prime number", () => {
    expect(isPrime(9)).toBe(false);

});

test("Checks if the number 13 is a prime number", () => {
    expect(isPrime(13)).toBe(true);

});

test("Checks if the number 23 is a prime number", () => {
    expect(isPrime(23)).toBe(true);

});

test("Checks if the number 50 is a prime number", () => {
    expect(isPrime(50)).toBe(false);

});

test("Checks if the number 103 is a prime number", () => {
    expect(isPrime(103)).toBe(true);

});