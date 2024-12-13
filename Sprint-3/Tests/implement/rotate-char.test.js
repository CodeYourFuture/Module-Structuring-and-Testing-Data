/* Testing criteria
An inputted string character must rotate by 3 and output the corresponding alphabet position.
An inputted number must remain the same.
An inputted uppercase letter must output a rotated uppercase letter.
An inputted lowercase letter must output a rotated lowercase letter.
All inputted letters at the end of the alphabet must wrap around to the beginning.
*/

const {rotateCharacter} = require ('../../implement/rotate-char');
describe("rotateCharacter function", () => {

//Invalid cases
test("Please enter a number or character", () => {
    expect(() =>rotateCharacter(null)).toThrow("Please enter a number or character"); //must have an entry
    expect(() =>rotateCharacter(undefined)).toThrow("Please enter a number or character"); //must be an entry
})

//Typical cases
test("should return lowercase 'b' + rotation when string b and rotation is input", () => {
    expect(rotateCharacter("a", 3)).toBe("d");
    expect(rotateCharacter("c", 4)).toBe("g");
    expect(rotateCharacter("D", 2)).toBe("F");
    expect(rotateCharacter("6", 2)).toBe(6);
    expect(rotateCharacter("y", 3)).toBe("b");
    expect(rotateCharacter("Y", 3)).toBe("B");
});

});