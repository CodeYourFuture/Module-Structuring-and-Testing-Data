function getAngleType(angle) {
    if (angle <= 0 || angle >= 360) return "Invalid angle";
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Reflex angle"; // angle between 180 and 360
};



// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;
console.log(getAngleType(45));   // Acute angle
console.log(getAngleType(90));   // Right angle
console.log(getAngleType(135));  // Obtuse angle
console.log(getAngleType(180));  // Straight angle
console.log(getAngleType(270));  // Reflex angle
console.log(getAngleType(0));    // Invalid angle
console.log(getAngleType(360));  // Invalid angle
console.log(getAngleType(-10));  // Invalid angle
