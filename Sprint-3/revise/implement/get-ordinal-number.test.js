// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require('./get-ordinal-number');

const currentOutput = getOrdinalNumber(1);
const targetOutput = "1st";

test('This test will check if the proper ordinals are being added to the numbers', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = getOrdinalNumber(21);
const targetOutput2 = "21st";

test('This test will check if "st" is added for numbers ending in 1 (except 11)', () => {
    expect(currentOutput2).toEqual(targetOutput2);
});


const currentOutput3 = getOrdinalNumber(32);
const targetOutput3 = "32nd";

test('This test will check if "nd" is added for numbers ending in 2 (except 12)', () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = getOrdinalNumber(43);
const targetOutput4 = "43rd";

test('This test will check if "rd" is added for numbers ending in 3 (except 13)', () => {
    expect(currentOutput4).toEqual(targetOutput4);
});


const currentOutput5 = getOrdinalNumber(11);
const targetOutput5 = "11th";

test('This test will check if "th" is added for special cases like 11', () => {
    expect(currentOutput5).toEqual(targetOutput5);
});

const currentOutput6 = getOrdinalNumber(14);
const targetOutput6 = "14th";

test('This test will check if "th" is added for numbers like 14, 24, etc.', () => {
    expect(currentOutput6).toEqual(targetOutput6);
});

const currentOutput7 = getOrdinalNumber(100);
const targetOutput7 = "100th";

test('This test will check if "th" is added for large numbers like 100', () => {
    expect(currentOutput7).toEqual(targetOutput7);
});

const currentOutput8 = getOrdinalNumber(25);
const targetOutput8 = "25th";

test('This test will check if "th" is added for numbers like 25, 35, etc.', () => {
    expect(currentOutput8).toEqual(targetOutput8);
});
