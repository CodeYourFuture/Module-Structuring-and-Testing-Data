const rotateCharacter = require('./rotate-char');

const currentOutput = rotateCharacter("a", 3);
const targetOutput = "d";

test('This test will check whether the rotation of characters is happening correctly with the given shift value', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = rotateCharacter("Z", 2);
const targetOutput2 = "B";

test('Rotate uppercase letter with wraparound', () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = rotateCharacter("a", -2);
const targetOutput3 = "y";

test('Rotate lowercase letter backward by negative shift', () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = rotateCharacter("a", -5);
const targetOutput4 = "v";

test('Rotate lowercase letter backward with wraparound', () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = rotateCharacter("7", 3);
const targetOutput5 = "7";

test('Leave non-alphabet character unchanged', () => {
    expect(currentOutput5).toEqual(targetOutput5);
});

const currentOutput6 = rotateCharacter("A", -4);
const targetOutput6 = "W";

test('Rotate uppercase letter backward with wraparound', () => {
    expect(currentOutput6).toEqual(targetOutput6);
});
