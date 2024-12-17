/* Testing criteria
If the input is 90, the output should be "Right angle"
If the input is less than 90, the output should be "Acute angle"
If the input is more than 90, the output should be "Obtuse angle"
If the input is 180, the output should be "Straight angle"
If the input is more than 180 but less than 360, the output should be "Reflex angle"
If the input is any value outside of these parameters, the output should be "Please enter a valid angle"
*/

const {getAngleType} = require ('../../implement/get-angle-type');
describe("getAngleType function", () => {
//Typical cases
test("should return 'Right angle' when 90 degrees", () => {
    expect(getAngleType(90)).toBe("Right angle");
});

test("should return 'Acute angle' when less than 90 degrees", () => {
    expect(getAngleType(60)).toBe("Acute angle");
});

test("should return 'Obtuse angle' when more than 90 degrees", () => {
    expect(getAngleType(130)).toBe("Obtuse angle");
});

test("should return 'Straight angle' when 180 degrees", () => {
    expect(getAngleType(180)).toBe("Straight angle");
});

test("should return 'Reflex angle' when more than 180 but less than 360 degrees", () => {
    expect(getAngleType(240)).toBe("Reflex angle");
});


//Edge cases
test("should return 'Acute angle' when less than 90 degrees", () => {
    expect(getAngleType(76)).toBe("Acute angle");
});

test("should return 'Obtuse angle' when more than 90 degrees", () => {
    expect(getAngleType(169)).toBe("Obtuse angle");
});

test("should return 'Reflex angle' when more than 180 but less than 360 degrees", () => {
    expect(getAngleType(321)).toBe("Reflex angle");
});


//Invalid cases
test("should return 'Please enter a valid angle' when negative degrees", () => {
    expect(getAngleType(-45)).toBe("Please enter a valid angle");
});

test("should return 'Please enter a valid angle' when equal to or greater than 360 degrees", () => {
    expect(getAngleType(360)).toBe("Please enter a valid angle");
});

test("should return 'Please enter a valid angle' for inputs that are not numbers", () => {
    expect(getAngleType("string")).toBe("Please enter a valid angle");
    expect(getAngleType(null)).toBe("Please enter a valid angle");
    expect(getAngleType(undefined)).toBe("Please enter a valid angle");
});
});