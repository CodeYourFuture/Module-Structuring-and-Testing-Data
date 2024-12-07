const isValidTriangle = require('./is-valid-triangle');

const currentOutput = isValidTriangle(3, 3, 3);
const targetOutput = true;

test('Check if the function correctly identifies an equilateral triangle as valid', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = isValidTriangle(3, 4, 5);
const targetOutput2 = true;

test('Check if the function correctly identifies a scalene triangle as valid', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})

const currentOutput4 = isValidTriangle(0, 4, 5);
const targetOutput4 = false;

test('Check if the function correctly identifies a triangle with zero side length as invalid', () => {
    expect(currentOutput4).toEqual(targetOutput4);
})

const currentOutput5 = isValidTriangle(-2, 7, 3);
const targetOutput5 = false;

test('Check if the function correctly identifies a triangle with negative side length as invalid', () => {
    expect(currentOutput5).toEqual(targetOutput5);
})

const currentOutput6 = isValidTriangle(6, 8, 10);
const targetOutput6 = true;

test('Check if the function correctly identifies a right triangle as valid', () => {
    expect(currentOutput6).toEqual(targetOutput6);
})
