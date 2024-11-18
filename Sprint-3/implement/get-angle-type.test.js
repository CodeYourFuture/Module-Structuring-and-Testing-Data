const getAngleType = require('./getAngleType');


  test('should return "Right angle" for 90 degrees', () => {
    expect(getAngleType(90)).toBe('Right angle');
  });

  test('should return "Acute angle" for angles less than 90 degrees', () => {
    expect(getAngleType(45)).toBe('Acute angle');
  });

  test('should return "Obtuse angle" for angles between 90 and 180 degrees', () => {
    expect(getAngleType(120)).toBe('Obtuse angle');
  });

  test('should return "Straight angle" for 180 degrees', () => {
    expect(getAngleType(180)).toBe('Straight angle');
  });

  test('should return "Reflex angle" for angles between 180 and 360 degrees', () => {
    expect(getAngleType(270)).toBe('Reflex angle');
  });

