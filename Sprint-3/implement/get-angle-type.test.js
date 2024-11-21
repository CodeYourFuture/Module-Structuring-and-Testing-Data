// angleUtils.test.js
const getAngleType = require('./get-angle-type');

describe('getAngleType', () => {
  it('should return "Acute angle" for angles less than 90', () => {
    expect(getAngleType(30)).toBe('Acute angle');
    expect(getAngleType(0)).toBe('Acute angle');
    expect(getAngleType(89)).toBe('Acute angle');
  });

  it('should return "Right angle" for angle equal to 90', () => {
    expect(getAngleType(90)).toBe('Right angle');
  });

  it('should return "Obtuse angle" for angles between 90 and 180', () => {
    expect(getAngleType(150)).toBe('Obtuse angle');
  });

  it('should return "Straight angle" for angle equal to 180', () => {
    expect(getAngleType(180)).toBe('Straight angle');
  });

  it('should return "Reflex angle" for angles between 180 and 360', () => {
    expect(getAngleType(270)).toBe('Reflex angle');
  });

  it('should return "Invalid angle" for angles less than 0 or greater than 360', () => {
    expect(getAngleType(-10)).toBe('Invalid angle');
    expect(getAngleType(400)).toBe('Invalid angle');
  });
});

