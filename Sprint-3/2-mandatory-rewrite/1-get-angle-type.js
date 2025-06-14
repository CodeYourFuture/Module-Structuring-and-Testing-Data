function getAngleType(angle) {

 if (angle === 90) return "Right angle";
  // replace with your completed function from key-implement

// if the angle is less than 90 degrees, it's an acute angle
  if (angle < 90) return "Acute angle";
  // if the angle is greater than 90 degrees and less than 180 degrees, it's an obtuse angle
  if (angle > 90 && angle < 180) return "Obtuse angle";
  // if the angle is exactly 180 degrees, it's a straight angle
  if (angle === 180) return "Straight angle";
  // if the angle is greater than 180 degrees and less than 360 degrees, it's a reflex angle
  if (angle > 180 && angle < 360) return "Reflex angle";
  
  // if the angle doesn't match any of the above conditions, return an error message
  return "Invalid angle";
}








// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;