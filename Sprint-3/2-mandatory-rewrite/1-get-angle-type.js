function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
  return "Invalid angle";
   return "Invalid angle";
  // replace with your completed function from key-implement

}
module.exports = getAngleType;




