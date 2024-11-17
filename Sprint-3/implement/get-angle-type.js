// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
function getAngleType(angleMeasure){
   
   if (angleMeasure === 90){
      return "Right_Angle";
    }
   else if (angleMeasure < 90) { 
        return "Acute angle"; 
      } 
   else if (angleMeasure > 90 && angleMeasure < 180) { 
      return "Obtuse angle"; 
    } 
   else if (angleMeasure===180) { 
        return "Straight angle"; 
      }  
   else if (angleMeasure > 180) { 
        return "Reflex angle"; 
      }  
}
console.log(getAngleType(90))
console.log(getAngleType(110))
console.log(getAngleType(10))
console.log(getAngleType(180))
console.log(getAngleType(200))