function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  // replace with your completed function from key-implement
// Case 2: Acute angle (less than 90 degrees)
if (angle < 90) return "Acute angle";
  
// Case 3: Obtuse angle (greater than 90 but less than 180 degrees)
if (angle > 90 && angle < 180) return "Obtuse angle";

// Case 4: Straight angle (exactly 180 degrees)
if (angle === 180) return "Straight angle";

// Case 5: Reflex angle (greater than 180 but less than 360 degrees)
if (angle > 180 && angle < 360) return "Reflex angle";
}








// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;