
function getAngleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
    return "Invalid angle";
  }
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

assertEquals(getAngleType(45), "Acute angle");
assertEquals(getAngleType(90), "Right angle");
assertEquals(getAngleType(120), "Obtuse angle");
assertEquals(getAngleType(180), "Straight angle");
assertEquals(getAngleType(270), "Reflex angle");
assertEquals(getAngleType(360), "Invalid angle");

console.log("All tests finished");





