function getAngleType(angle) {
  // Ensure angle is a number and within valid bounds
  if (typeof angle !== "number" || angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
  if (angle < 90) {
    return "Acute angle";
  }
  if (angle === 90) {
    return "Right angle";
  }
  if (angle < 180) {
    return "Obtuse angle";
  }
  if (angle === 180) {
    return "Straight angle";
  }
  // Any remaining angle must be between 180 and 360 (exclusive)
  return "Reflex angle";
}



// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;