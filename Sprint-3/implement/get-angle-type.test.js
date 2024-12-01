const { getAngleType } = require('./get-angle-type');

test("Test to see degrees will match Right angle", function() {
    expect(getAngleType(90)).toEqual("Right angle");
});

test("Test to see degrees will match Acute angle", function () {
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(89)).toBe("Acute angle");
    expect(getAngleType(0)).toBe("Acute angle");
    expect(getAngleType(89.999)).toBe("Acute angle");
});
    
test("Test to see degrees will match Obtuse angle", function() {
    expect(getAngleType(120)).toBe("Obtuse angle");
    expect(getAngleType(150)).toBe("Obtuse angle");
    expect(getAngleType(90.001)).toBe("Obtuse angle");
    expect(getAngleType(179.999)).toBe("Obtuse angle");
});

test("Test to see degrees will match Straight angle", function() {
    expect(getAngleType(180)).toBe("Straight angle");
});

test("Test to see degrees will match Reflex angle", function() {
    expect(getAngleType(200)).toBe("Reflex angle");
    expect(getAngleType(359)).toBe("Reflex angle");
    expect(getAngleType(180.001)).toBe("Reflex angle");
    expect(getAngleType(359.999)).toBe("Reflex angle");
});
    
test("Test to see if angles are invalid", function() {
    expect(getAngleType(-1)).toBe("Invalid angle");
    expect(getAngleType(361)).toBe("Invalid angle");;
});
  
// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
