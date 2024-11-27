// Implement a function getAngleType

function getAngleType(angle) {
  if (angle === 90) return "Right angle";

  if (angle < 90) return "Acute angle";

  if (angle > 90 && angle < 180) return "Obtuse angle";

  if (angle === 180) return "Straight angle";

  if (angle > 180 && angle < 360) return "Reflex angle";
}

// maybe this could have been a switch statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// 🧪 Let's test each stated criterion

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
try {
  const right = getAngleType(90);
  console.assert(
    right === "Right angle",
    `Expected "Right angle" for 90°, got: ${right}`
  );
} catch (error) {
  console.error(error.message);
}
// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

try {
  const acute = getAngleType(45);
  console.assert(
    acute === "Acute angle",
    `Expected "Acute angle" for 45°, got: ${acute}`
  );
} catch (error) {
  console.error(error.message);
}

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

try {
  const obtuse = getAngleType(120);
  console.assert(
    obtuse === "Obtuse angle",
    `Expected "Obtuse angle" for 120°, got: ${obtuse}`
  );
} catch (error) {
  console.error(error.message);
}

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

try {
  const straight = getAngleType(180);
  console.assert(
    straight === "Straight angle",
    `Expected "Straight angle" for 180°, got: ${straight}`
  );
} catch (error) {
  console.error(error.message);
}

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

try {
  const reflex = getAngleType(70);
  console.assert(
    reflex === "Reflex angle",
    `Expected "Reflex angle" for 270°, got: ${reflex}`
  );
} catch (error) {
  console.error(error.message);
}
