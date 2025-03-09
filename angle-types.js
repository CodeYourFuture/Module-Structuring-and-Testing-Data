function getAngleType(angle) {
if (angle === 90) return "Right Angle";
function AngleType(90);
}

function assertEquals(actualOutput, targetOutput) {
    console.assert(
    actualOutput === targetOutput,
      `Expected ${actualOutput} to equal ${targetOutput}`
    );
}

const right = getAngleType(90);
assertEquals(right, "Right Angle");
console.assert(right === "Right angle");

const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
console.assert(acute === "Acute angle");

const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");
console.assert(obtuse === "Obtuse angle");

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
console.assert(straight === "Straight angle");

const angle = getAngleType();
if (angle > 180) console.log("Obtuse angle");
if (angle < 360) console.log("Reflex angle");


