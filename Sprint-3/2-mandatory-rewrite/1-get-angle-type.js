function getAngleType(angle) {
   if (angle === 90) return "Right angle";
   if (angle ===0) return "Zero angle"
    if(angle > 0 && angle < 90) return "Acute angle"
   if(angle > 90 && angle < 180) return "Obtuse angle"
   if(angle === 180) return "Straight angle"
   if(angle > 180 && angle < 360) return "Reflex angle"
   if (typeof angle !== 'number' || angle < 0 || angle >= 360) return "Invalid angle";

}








// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;