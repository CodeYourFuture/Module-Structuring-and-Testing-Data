class AngleType {
    static getAngleType(angle) {
        if (angle === 90) {
            return "Right angle";
        } else if (angle < 90) {
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
}

// Test cases
console.log(AngleType.getAngleType(45));    // Output: Acute angle
console.log(AngleType.getAngleType(90));    // Output: Right angle
console.log(AngleType.getAngleType(120));   // Output: Obtuse angle
console.log(AngleType.getAngleType(180));   // Output: Straight angle
console.log(AngleType.getAngleType(270));   // Output: Reflex angle
console.log(AngleType.getAngleType(360));   // Output: Invalid angle


