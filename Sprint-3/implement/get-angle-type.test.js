// Implement a function getAngleType
const getAngleType = require('./get-angle-type'); 

test('Should return "Right angle" for 90 degrees', () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test('Should return "Acute angle" for angles between 0 and 90', () => { 
  expect(getAngleType(35)).toEqual("Acute angle");
});

test('Should return "Acute angle" for angles between 0 and 90', () => { 
  expect(getAngleType(1)).toEqual("Acute angle");
});

test('Should return "Obtuse Angle" for angles between 90 and 180', () => {
  expect(getAngleType(135)).toEqual("Obtuse angle");
});

test('Should return "Obtuse Angle" for angles between 90 and 180', () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
});

test('Should return "Obtuse Angle" for angles between 90 and 180', () => {
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test('Should return "Straight angle" for 180 degrees', () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test('Should return "Reflex Angle" for angles between 180 and 360', () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});

test('Should return "Invalid angle" for angles outside 0-360 degrees', () => {
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(400)).toEqual("Invalid angle");
});
