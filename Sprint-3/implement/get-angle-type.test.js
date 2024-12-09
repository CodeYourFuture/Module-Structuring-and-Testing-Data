// Import the function
function getAngleType(num) {
    if (num === 90) {
        return "Right angle";
    } else if (num === 180) {
        return "Straight angle";
    } else if (num > 0 && num < 90) {
        return "Acute angle";
    } else if (num > 90 && num < 180) {
        return "Obtuse angle";
    } else if (num > 180 && num < 360) {
        return "Reflex angle";
    } else {
        return "Invalid number";
    }
}




  
    test("returns 'Acute angle' for angles between 0 and 90", function() {
        expect(getAngleType(45)).toBe("Acute angle");
        expect(getAngleType(89)).toBe("Acute angle");
    });

   
    test("returns 'Right angle' for 90 degrees", function() {
        expect(getAngleType(90)).toBe("Right angle");
    });

  
    test("returns 'Obtuse angle' for angles between 90 and 180", function() {
        expect(getAngleType(120)).toBe("Obtuse angle");
        expect(getAngleType(179)).toBe("Obtuse angle");
    });

    
    test("returns 'Straight angle' for 180 degrees", function() {
        expect(getAngleType(180)).toBe("Straight angle");
    });

    
    test("returns 'Reflex angle' for angles between 180 and 360",function(){
        expect(getAngleType(270)).toBe("Reflex angle");
        expect(getAngleType(359)).toBe("Reflex angle");
    });

  
    test("returns 'Invalid number' for numbers not in the valid range", function() {
        expect(getAngleType(-1)).toBe("Invalid number");
        expect(getAngleType(360)).toBe("Invalid number");
        expect(getAngleType(400)).toBe("Invalid number");
    });
