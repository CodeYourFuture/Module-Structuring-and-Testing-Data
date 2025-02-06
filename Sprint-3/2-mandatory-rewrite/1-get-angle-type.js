function getAngleType(angle) {
  switch (true) {
    case angle === 90:
      return "Right angle";
    case angle < 90:
      return "Acute angle";
    case angle > 90 && angle < 180:
      return "Obtuse angle";
    case angle === 180:
      return "Straight angle";
    case angle > 180 && angle < 360:
      return "Reflex angle";
    default:
      return "Invalid angle";
  }
}
// replace with your completed function from key-implement

// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;
