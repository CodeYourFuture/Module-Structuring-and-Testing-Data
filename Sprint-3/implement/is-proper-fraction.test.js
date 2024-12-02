const isProperFraction = require('./is-proper-fraction');

const currentOutput = isProperFraction(2, 7);
const targetOutput = true;

test('This will test if a proper fraction is tested properly', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = isProperFraction(5, 2);
const targetOutput2 = false;

test('This will test if a proper fraction is tested properly', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})

test('This will test for division by zero', () => {
    expect(() => isProperFraction(5, 0)).toThrow("Denominator cannot be zero");
})

const currentOutput3 = isProperFraction(-2, 9);
const targetOutput3 = true;

test('This will test if a proper fraction is tested properly', () => {
    expect(currentOutput3).toEqual(targetOutput3);
})

const currentOutput4 = isProperFraction(4, 4);
const targetOutput4 = false;

test('This will test if a proper fraction is tested properly', () => {
    expect(currentOutput4).toEqual(targetOutput4);
})

const currentOutput5 = isProperFraction(-7, -8);
const targetOutput5 = true;

test('This will test if a proper fraction is tested properly', () => {
    expect(currentOutput5).toEqual(targetOutput5);
})