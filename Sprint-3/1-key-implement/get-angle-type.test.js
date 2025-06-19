const getAngleType = require('./getAngleType');

describe('getAngleType', () => {
  test('returns Right angle for 90', () => {
    expect(getAngleType(90)).toBe('Right angle');
  });

  test('returns Acute angle for 45', () => {
    expect(getAngleType(45)).toBe('Acute angle');
  });
});
