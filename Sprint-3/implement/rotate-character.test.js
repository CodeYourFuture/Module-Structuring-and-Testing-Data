const rotateCharacter = require("./rotate-character");

test("Checks for Rotate Lowercase Letters", () => {
    const currentOutput = rotateCharacter("a", 3);
    const targetOutput = "d";

    expect(currentOutput).toEqual(targetOutput);
});

test("Checks for Rotate Uppercase Letters", () => {
    const currentOutput = rotateCharacter("F", 1);
    const targetOutput = "G";

    expect(currentOutput).toEqual(targetOutput);
});

test("Checks for where Non-Letter Characters are left Unchanged", () => {
    const currentOutput = rotateCharacter(7, 5);
    const targetOutput = 7;

    expect(currentOutput).toEqual(targetOutput);
});

test("Checks if a Characters shift with Wraparound", () => {
    const currentOutput = rotateCharacter("Y", 2);
    const targetOutput = "A";

    expect(currentOutput).toEqual(targetOutput);
});


