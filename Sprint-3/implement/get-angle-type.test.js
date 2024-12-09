const getAngleType = require('./get-angle-type')

test('Returns "Right angle" when the angle is exactly 90 degrees', () => {
    expect(getAngleType(90)).toBe('Right angle');
  });

test('Returns "Acute" when the angle is less than 90 degrees', () => {
expect(getAngleType(45)).toBe('Acute angle');
});

test('Returns "Obtuse angle" when the angle is greater than 90 degrees but less than 180 degrees', () => {
expect(getAngleType(120)).toBe('Obtuse angle');
});


test('Returns "Straight angle" when the angle is exactly 180 degrees', () => {
    expect(getAngleType(180)).toBe('Straight angle');
  });


test('Returns "Reflex angle" when the angle is greater than 180 degrees but less than 360 degrees', () => {
  expect(getAngleType(220)).toBe('Reflex angle');
});