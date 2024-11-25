// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const isPrime = require('./is-prime');

const currentOutput = isPrime(1);
const targetOutput = false;

test('This test will check if the isPrime function is evaluating the numbers correctly', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = isPrime(12);
const targetOutput2 = false;

test('This test will check if the isPrime function is evaluating the numbers correctly', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})

const currentOutput3 = isPrime(2);
const targetOutput3 = true;

test('This test will check if the isPrime function is evaluating the numbers correctly', () => {
    expect(currentOutput3).toEqual(targetOutput3);
})

const currentOutput4 = isPrime(11);
const targetOutput4 = true;

test('This test will check if the isPrime function is evaluating the numbers correctly', () => {
    expect(currentOutput4).toEqual(targetOutput4);
})


test('This test will check if the isPrime function is evaluating the numbers correctly', () => {
    expect(() => isPrime(-9)).toThrow("This function works with positive integers only.");
})