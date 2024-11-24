const isValidTriangle = require('./is-valid-triangle');

const currentOutput = isValidTriangle(3, 3, 3);
const targetOutput = true;

test('This test will check if the function is outputting the correct value', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = isValidTriangle(3, 4, 5);
const targetOutput2 = true;

test('This test will check if the function is outputting the correct value', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})

const currentOutput4 = isValidTriangle(0, 4, 5);
const targetOutput4 = false;

test('This test will check if the function is outputting the correct value', () => {
    expect(currentOutput4).toEqual(targetOutput4);
})

const currentOutput5 = isValidTriangle(-2, 7, 3);
const targetOutput5 = false;

test('This test will check if the function is outputting the correct value', () => {
    expect(currentOutput5).toEqual(targetOutput5);
})

const currentOutput6 = isValidTriangle(6, 8, 10);
const targetOutput6 = true;

test('This test will check if the function is outputting the correct value', () => {
    expect(currentOutput6).toEqual(targetOutput6);
})