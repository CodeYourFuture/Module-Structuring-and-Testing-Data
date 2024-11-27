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
// Then the function should return "Obtuse angle"fed

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

function getAngleType(angle) {
    if (angle === 90) {
        return "Right angle";
    } else if (angle < 90) {
        return "Acute angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 180 && angle < 360) {
        return "Reflex angle";
    }
    return "Invalid angle";
}

// console.assert tests
// Test 1
const currentOutput1 = getAngleType(90);
const targetOutput1 = "Right angle";
console.log(currentOutput1);
console.assert(currentOutput1 === targetOutput1, `${currentOutput1} is not equal ${targetOutput1}`);

// Test 2
const currentOutput2 = getAngleType(80);
const targetOutput2 = "Acute angle";
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// Test 3
const currentOutput3 = getAngleType(100);
const targetOutput3 = "Obtuse angle";
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// Test 4
const currentOutput4 = getAngleType(180);
const targetOutput4 = "Straight angle";
console.log(currentOutput4);
console.assert(currentOutput4 === targetOutput4, `${currentOutput4} is not equal ${targetOutput4}`);

// Test 5
const currentOutput5 = getAngleType(300);
const targetOutput5 = "Reflex angle";
console.log(currentOutput5);
console.assert(currentOutput5 === targetOutput5, `${currentOutput5} is not equal ${targetOutput5}`);

// Test 6
const currentOutput6 = getAngleType(400);
const targetOutput6 = "Invalid angle";
console.log(currentOutput6);
console.assert(currentOutput6 === targetOutput6, `${currentOutput6} is not equal ${targetOutput6}`);

// Jest tests
test("identify angle", () => {
    expect(getAngleType(90)).toBe("Right angle");
    expect(getAngleType(80)).toBe("Acute angle");
    expect(getAngleType(100)).toBe("Obtuse angle");
    expect(getAngleType(180)).toBe("Straight angle");
    expect(getAngleType(300)).toBe("Reflex angle");
});