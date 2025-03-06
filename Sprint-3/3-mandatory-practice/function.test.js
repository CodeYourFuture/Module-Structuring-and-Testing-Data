const { default: expect } = require('expect');
const functions = require('./function');


test('adds 5 + 5 = 10', () => {
    expect(functions.add(5, 5)).toBe(10)
});


test('this will be less than 100', () => {
    const load1 = 20;
    const load2 = 40;
    expect(load1 + load2).toBeLessThan(90);
});
// .toBe is called a matcher