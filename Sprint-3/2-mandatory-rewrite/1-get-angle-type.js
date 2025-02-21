function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  // replace with your completed function from key-implement
  if (angle < 90) return "Acute angle"; // Less than 90°
  if (angle < 180) return "Obtuse angle"; // Between 90° and 180°
  if (angle === 180) return "Straight angle"; // Exactly 180°
  return "Reflex angle"; // Greater than 180° but less than 360°


// Jest test export (for unit testing)
module.exports = getAngleType;

}








// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;