const rotateCharacter = require("./rotate-character");

test("Checks for Rotate Lowercase Letters", () => {
    expect(rotateCharacter("a", 3)).toEqual("d");
});

test("Checks for Rotate Uppercase Letters", () => {
    expect(rotateCharacter("F", 1)).toEqual("G");
});

test("Checks for where Non-Letter Characters are left Unchanged", () => {
    expect(rotateCharacter(7, 5)).toEqual(7);
});

test("Checks if a Characters shift with Wraparound", () => {
    expect(rotateCharacter("Y", 2)).toEqual("A");
});


