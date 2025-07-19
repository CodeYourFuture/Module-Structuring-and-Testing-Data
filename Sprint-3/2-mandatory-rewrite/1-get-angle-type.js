function getAngleType(angle) {
  // replace with your completed function from key-implement
    // Step 0: Validate input is a positive integer
    if (!Number.isInteger(angle) || angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
  // Step 1: Check for a right angle (exactly 90 degrees)
  if (angle === 90) return "Right angle";

  // Step 2: Check for a straight angle (exactly 180 degrees)
  if (angle === 180) return "Straight angle";

  // Step 3: Check for an acute angle (between 0 and 90)
  if (angle > 0 && angle < 90) return "Acute Angle";

  // Step 4: Check for an obtuse angle (between 90 and 180)
  if (angle > 90 && angle < 180) return "Obtuse angle";
  // Step 5: Check for a reflex angle (between 180 and 360)
  if (angle > 180 && angle < 360) return "Reflex angle";

  // Step 6: Handle invalid or unsupported input
  return "Invalid angle";
}

// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;

// console.log(getAngleType(90)); // "Right angle"
// console.log(getAngleType(180)); // "Straight angle"
// console.log(getAngleType(45)); // "Acute angle"
// console.log(getAngleType(120)); // "Obtuse angle"
// console.log(getAngleType(0)); // "Invalid angle"
// console.log(getAngleType(200)); // "Invalid angle"
// console.log(getAngleType(90.5)); // "Invalid angle"
