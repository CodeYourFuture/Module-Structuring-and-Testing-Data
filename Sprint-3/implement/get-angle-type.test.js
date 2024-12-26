// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// 1. Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// 2. Identify Acute Angles:
// When the angle is less than 90 degrees",
// Then the function should return "Acute angle"

// 3. Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// 4. Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// 5. Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"


// ============================= function getAngleType ===============================
//the use of else if is to compare one of the conditions 

function getAngleType(angle){

    if (angle === 90) {
      return "Right angle";
    } else if (angle > 0 && angle < 90) {
      return "Acute angle";
    } else if (angle > 90 && angle < 180) {
      return  "Obtuse Angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else if (angle > 180 && angle < 360) {
      return "Reflex Angle";
    }
    return "Invalid angle";
} 


// console.log(getAngleType(90));  // "Right angle"
// console.log(getAngleType(45));  // "Acute angle"
// console.log(getAngleType(135)); // "Obtuse angle"
// console.log(getAngleType(180)); // "Straight angle"
// console.log(getAngleType(270)); // "Reflex angle"
// console.log(getAngleType(-30)); // "Invalid angle"



// ============== test with console.assert() ==================
//these test are more simple to write and read and only return the fail message
//  console.assert(expression, message);

console.assert(getAngleType(99) === "Right angle", "Test case failed for Right Angle"); // fail AssertionError [ERR_ASSERTION]: Test case failed for Right Angle
console.assert(getAngleType(40) === "Acute angle", "Test case failed for Acute Angle");
console.assert(getAngleType(135) === "Obtuse Angle", "test case failed for Obtuse Angle");
console.assert(getAngleType(380) === "Straight angle", "Test failed for Straight angle"); // fail AssertionError [ERR_ASSERTION]: Test failed for Straight angle
console.assert(getAngleType(270) === "Reflex Angle", "Test case Failed for Reflex Angle");
console.assert(getAngleType(-10) === "Invalid angle", "Test case Failed for Invalid angle");
console.assert(getAngleType(400) === "Invalid angle", "Test case Failed for Invalid Angle");



// ============== test with Jest ==================
// These tests are more detailed because we can see what was expected and what went wrong
test('Should return "Right angle" for 90 degrees', () => {
  const result = getAngleType(90); 
  expect(result).toBe("Right angle");
});

test('Should return "Acute angle" for angles between 0 and 90', () => {
  const result = getAngleType(35); 
  expect(result).toBe("Acute angle");
});

test('Should return "Obtuse Angle" for angles between 90 and 180', () => {
  const result = getAngleType(135);
  expect(result).toBe("Obtuse Angle");
});

test('Should return "Straight angle" for 180 degrees', () => {
  const result = getAngleType(180);
  expect(result).toBe("Straight angle");
});

test('Should return "Reflex Angle" for angles between 180 and 360', () => {
  const result = getAngleType(270);
  expect(result).toBe("Reflex Angle");
});

test('Should return "Invalid angle" for angles outside 0-360 degrees', () => {
  expect(getAngleType(-10)).toBe("Invalid angle");
  expect(getAngleType(400)).toBe("Invalid angle");
});





//nodemon
// to run these test and see the changes applied in the same time use      < nodemon -x "npm test" get-angle-type.test.js >

// npm
//once you are inside of the file you want to run  < npm test --  --watch >