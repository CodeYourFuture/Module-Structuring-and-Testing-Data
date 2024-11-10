public class AngleType {

    public static String getAngleType(int angle) {
        if (angle == 90) {
            return "Right angle";
        } else if (angle < 90) {
            return "Acute angle";
        } else if (angle > 90 && angle < 180) {
            return "Obtuse angle";
        } else if (angle == 180) {
            return "Straight angle";
        } else if (angle > 180 && angle < 360) {
            return "Reflex angle";
        } else {
            return "Invalid angle";
        }
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(getAngleType(45));    // Output: Acute angle
        System.out.println(getAngleType(90));    // Output: Right angle
        System.out.println(getAngleType(120));   // Output: Obtuse angle
        System.out.println(getAngleType(180));   // Output: Straight angle
        System.out.println(getAngleType(270));   // Output: Reflex angle
        System.out.println(getAngleType(360));   // Output: Invalid angle
    }
}

