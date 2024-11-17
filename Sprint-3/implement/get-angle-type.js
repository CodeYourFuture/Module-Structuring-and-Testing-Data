function getAngleType(angle) {
    if (angle === 90) {
        return "Right angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 180 && angle < 360) {
        return "Reflex angle";
    } else {
        return "Invalid angle";
    }
}

// Example usage:
console.log(getAngleType(90));  // Output: "Right angle"
console.log(getAngleType(45));  // Output: "Acute angle"
console.log(getAngleType(120)); // Output: "Obtuse angle"
console.log(getAngleType(180)); // Output: "Straight angle"
console.log(getAngleType(270)); // Output: "Reflex angle"
console.log(getAngleType(360)); // Output: "Invalid angle"

