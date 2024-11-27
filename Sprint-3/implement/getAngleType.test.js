test('should return "Right angle" exactly for 90 degrees', function() {
    const currentInput = getAngleType (90);
    const targetInput = "Right angle";
    expect(currentInput).toBe(targetInput);
});

test('should return "Acute angle" when degrees is less than 90 degrees', function() {
    const currentInput = getAngleType (45);
    const targetInput = "Acute angle";
    expect(currentInput).toBe(targetInput);
});  

test('should return "Obtuse angle" when degrees are between 90 and 180 degrees', function() {
    const currentInput = getAngleType(135);
    const targetInput = "Obtuse angle";
    expect(currentInput).toBe(targetInput);
});

test('should return "Straight angle" exactly for 180 degrees', function() {
    const currentInput = getAngleType(180);
    const targetInput = "Straight angle";
    expect(currentInput).toBe(targetInput);
});

test('should return "Reflex angle" when degrees are between 180 and 360 degrees', function() {
    const currentInput = getAngleType(270);
    const targetInput = "Reflex angle";
    expect(currentInput).toBe(targetInput);
});

test('should return "Invalid angle" for angles less than 0 degrees', function() {
    const currentInput = getAngleType(-45);
    const targetInput = "Invalid angle";
    expect(currentInput).toBe(targetInput);
});

test('should return "Invalid angle" for angles equal to or greater than 360 degrees', function() {
    const currentInput = getAngleType(360);
    const targetInput = "Invalid angle";
    expect(currentInput).toBe(targetInput);
});

test('should return "Invalid angle" for non-numeric inputs', function() {
    const currentInput = getAngleType("hello");
    const targetInput = "Invalid angle";
    expect(currentInput).toBe(targetInput);
});