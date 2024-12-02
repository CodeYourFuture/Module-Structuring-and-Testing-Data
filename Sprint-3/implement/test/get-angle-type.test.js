const getAngleType = require('../get-angle-type');

test('Get Right angle', () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test('Get Acute angle ', () => {
  expect(getAngleType(70)).toBe("Acute angle");
});

test('Get Obtuse angle ', () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
});

test('Get Straight angle ', () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

test('Get Reflex angle ', () => {
  expect(getAngleType(200)).toBe("Reflex angle");
});

test('Get Invalid angle ', () => {
  expect(getAngleType("abc")).toBe("Invalid angle");
});

test('Get Invalid angle for zero', () => {
  expect(getAngleType(0)).toBe("Invalid angle");
});

test('Get Invalid angle for 360', () => {
  expect(getAngleType(360)).toBe("Invalid angle");
});

test('Get Invalid angle for negative value', () => {
  expect(getAngleType(-10)).toBe("Invalid angle");
});

test('Get Invalid angle for angle greater than 360', () => {
  expect(getAngleType(400)).toBe("Invalid angle");
});