// // Implement a function getAngleType

// // Acceptance criteria:

// // Given an angle in degrees,
// // When the function getAngleType is called with this angle,
// // Then it should:


// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"



// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

function getAngleType(degrees){
  if (degrees === 180){
    return ("Straight angle");
  }
  
} 
test ("angle is exactly 180 degrees", function() {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
