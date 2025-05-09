function getAngleType(angle) {
  if (angle === 90) return "Right anglconst getAngleType = require('./path/to/ye";
  // replace with your completed function from key-implement

}
function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
  if (angle === 360) return "Full rotation";
  throw new Error("Invalid angle"); // Handles invalid input
}

// Export function for Jest tests
module.exports = getAngleType;

// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you



function getAngleType(angle) {
  // Check for invalid input
  if (angle < 0 || angle > 360) {
    throw new Error("Invalid angle");
  }

  // Classify the angle
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
  if (angle === 360) return "Full rotation";

  // Fallback for unexpected input (should not reach here)
  throw new Error("Invalid angle");
}

// Export function for Jest tests
module.exports = getAngleType;
