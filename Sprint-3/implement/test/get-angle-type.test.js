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
