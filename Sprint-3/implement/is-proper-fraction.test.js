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