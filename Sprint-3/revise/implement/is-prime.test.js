// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require("./isPrime");



test("Checks if the number 2 is a prime number", () => {
    const currentOutput = isPrime(2);
    const targetOutput = "2 is prime!";

    expect(currentOutput).toBe(targetOutput);

});

test("Checks if the number 3 is a prime number", () => {
    const currentOutput = isPrime(3);
    const targetOutput = "3 is prime!";

    expect(currentOutput).toBe(targetOutput);

});

test("Checks if the number 4 is a prime number", () => {
    const currentOutput = isPrime(4);
    const targetOutput = "4 is not prime";

    expect(currentOutput).toBe(targetOutput);

});

test("Checks if the number 6 is a prime number", () => {
    const currentOutput = isPrime(6);
    const targetOutput = "6 is not prime";

    expect(currentOutput).toBe(targetOutput);

});

test("Checks if the number 7 is a prime number", () => {
    const currentOutput = isPrime(7);
    const targetOutput = "7 is prime!";

    expect(currentOutput).toBe(targetOutput);

});

test("Checks if the number 9 is a prime number", () => {
    const currentOutput = isPrime(9);
    const targetOutput = "9 is not prime";

    expect(currentOutput).toBe(targetOutput);

});

test("Checks if the number 13 is a prime number", () => {
    const currentOutput = isPrime(13);
    const targetOutput = "13 is prime!";

    expect(currentOutput).toBe(targetOutput);

});