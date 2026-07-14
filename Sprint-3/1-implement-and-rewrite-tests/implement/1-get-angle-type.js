
function getAngleType(angle) {
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
  else if (angle == 90) {
    return "Right angle";
  }
  else if (angle == 180) {
    return "Straight angle";
  }
  else if (angle > 0 && angle < 90) {
    return "Acute angle";
  }
  else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  }
  else 
    return "Reflex angle";
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
const invalid = getAngleType(0);
assertEquals(invalid, "Invalid angle");
console.log (getAngleType(0));

const invalid0 = getAngleType(-10);
assertEquals(invalid, "Invalid angle");
console.log (getAngleType(-10));

const invalid1 = getAngleType(360);
assertEquals(invalid1, "Invalid angle");
console.log (getAngleType(360));

const invalid2 = getAngleType(900);
assertEquals(invalid2, "Invalid angle");
console.log (getAngleType(900));

const right = getAngleType(90);
assertEquals(right, "Right angle");
console.log (getAngleType(90));

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
console.log (getAngleType(180));

const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
console.log (getAngleType(45));

const obtuse = getAngleType(135);
assertEquals(obtuse, "Obtuse angle");
console.log (getAngleType(135));

const reflex = getAngleType(240);
assertEquals(reflex, "Reflex angle");
console.log (getAngleType(240));

module.exports = getAngleType;

