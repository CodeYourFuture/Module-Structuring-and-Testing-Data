// triangle.test.js (CommonJS)
const { isValidTriangle } = require('./is-valid-triangle');

test('should return true for valid triangle', () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);
});

test('should return false for invalid triangle', () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false);
});

test('should return false for negative sides', () => {
    expect(isValidTriangle(-1, 2, 3)).toBe(false);
});
