function getAngleType(angle) {
  // handle undefined or out-of-range input
  if (typeof angle !== "number" || angle <= 0 || angle >= 360) {
    return "Invalid angle"; 
  }
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle"; 
  if (angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  
  // replace with your completed function from key-implement
  return "Reflex angle"; // angle > 180 and < 360
}
module.exports = getAngleType;








// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;