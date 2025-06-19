const getAngleType = require('./angle');  // ✅ import correctly

describe('getAngleType', () => {
  test('returns "Right angle" for 90°', () => {
    expect(getAngleType(90)).toBe('Right angle');
  });

  test('returns "Acute angle" for angle < 90°', () => {
    expect(getAngleType(45)).toBe('Acute angle');
  });

  test('returns "Obtuse angle" for angle > 90° and < 180°', () => {
    expect(getAngleType(135)).toBe('Obtuse angle');
  });

  test('returns "Straight angle" for 180°', () => {
    expect(getAngleType(180)).toBe('Straight angle');
  });

  test('returns "Reflex angle" for angle > 180° and < 360°', () => {
    expect(getAngleType(270)).toBe('Reflex angle');
  });

  test('returns "Invalid angle" for 0°', () => {
    expect(getAngleType(0)).toBe('Invalid angle');
  });

  test('returns "Invalid angle" for negative angles', () => {
    expect(getAngleType(-30)).toBe('Invalid angle');
  });

  test('returns "Invalid angle" for 360°', () => {
    expect(getAngleType(360)).toBe('Invalid angle');
  });

  test('returns "Invalid angle" for angle > 360°', () => {
    expect(getAngleType(400)).toBe('Invalid angle');
  });
});
