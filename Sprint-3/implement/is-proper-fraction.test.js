const isProperFraction = require('./is-proper-fraction');

const currentOutput = isProperFraction(2 / 7);
const targetOutput = true;

test('This will test if a proper fraction is tested properly', () => {
    expect(currentOutput).toEqual(targetOutput);
}) 