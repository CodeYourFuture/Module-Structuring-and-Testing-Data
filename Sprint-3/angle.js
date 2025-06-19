function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90 && angle > 0) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
  return "Invalid angle";
}

module.exports = getAngleType;
