// // Implement a function getAngleType

// // Acceptance criteria:

// // Given an angle in degrees,
// // When the function getAngleType is called with this angle,
// // Then it should:

// // Identify Right Angles:
// // When the angle is exactly 90 degrees,
// // Then the function should return "Right angle"

function getAngleType(degrees){
  if (degrees === 90){
    return ("Right angle");
  }
  
}

test ("angle is exactly 90 degrees", function() {
  expect(getAngleType(90)).toEqual("Right angle");
});
