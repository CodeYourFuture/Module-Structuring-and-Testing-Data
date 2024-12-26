const getAngleType = require('./get-angle-type.js');
const isProperFraction = require('./is-proper-fraction.js');
const isValidTriangle = require('./is-valid-triangle.js');
const getCardValue = require('./get-card-value.js');



test('Given an angle in degrees, return the type of angle', () => {
  expect(getAngleType(90)).toBe("Right angle");
  expect(getAngleType(45)).toBe("Acute angle");
  expect(getAngleType(160)).toBe("Obtuse angle");
  expect(getAngleType(180)).toBe("Straight angle");
  expect(getAngleType(300)).toBe("Reflex angle");
});

test('Given numerator and denominator, return the type of fraction', () => {
   expect(isProperFraction(2, 3)).toBe(true); 
   expect(isProperFraction(5, 3)).toBe(false);
   expect(isProperFraction(2, 0)).toBe("error");
});


test('Given length of sides validate the its a triangle', () => {
  expect(isValidTriangle(3, 3, 3)).toBe(true);
  expect(isValidTriangle(0, 3, 3)).toBe(false);
  expect(isValidTriangle(3, 1, 1)).toBe(false);  
});

test('Given the card input getCardValue returns correct number for valid ranks ', () => {
  expect(getCardValue("5♥")).toBe(5);
  expect(getCardValue("K♥")).toBe(10);
  expect(getCardValue("A♥")).toBe(11);
  expect(getCardValue("z♥")).toBe("Invalid Cards");   
  expect(getCardValue("99Q♠")).toBe("Invalid Cards"); // Invalid card format
  expect(getCardValue("100♠")).toBe("Invalid Cards"); // Valid "10" card
  expect(getCardValue("2K♠")).toBe("Invalid Cards");  // Invalid card format
  expect(getCardValue("KK♠")).toBe("Invalid Cards");  // Invalid card format
  expect(getCardValue("AA♠")).toBe("Invalid Cards");  // Invalid card format
});