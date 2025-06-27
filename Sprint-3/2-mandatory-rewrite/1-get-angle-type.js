function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Invalid angle";
  // replace with your completed function from key-implement
}

// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/2-mandatory-rewrite/1-get-angle-type.js"

// [Done] exited with code=0 in 0.051 seconds
