
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

//I have written some tests, passed them all on Devtools. Wrote some more below.


const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
const right = getAngleType(90);
assertEquals(right, "Right angle");
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");
const zero = getAngleType(0);
assertEquals(zero, "Invalid angle");
const negative = getAngleType(-10);
assertEquals(negative, "Invalid angle");
const fullTurn = getAngleType(360);
assertEquals(fullTurn, "Invalid angle");
const tooLarge = getAngleType(400);
assertEquals(tooLarge, "Invalid angle");

console.log("All tests finished");





