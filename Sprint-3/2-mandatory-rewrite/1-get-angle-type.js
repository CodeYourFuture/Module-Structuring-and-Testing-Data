// replace with your completed function from key-implement

function getAngleType(angle) {
   if (angle <= 0 || angle >= 360) return "Invalid angle"; // To handle out-of-range inputs

   if (angle === 90) return "Right Angle";
   if (angle > 0 && angle < 90) return "Acute Angle";
   if (angle > 90 && angle < 180) return "Obtuse Angle";
   if (angle === 180) return "Straight Angle";
   if (angle > 180 && angle < 360) return "Reflex Angle";
}

module.exports = getAngleType;