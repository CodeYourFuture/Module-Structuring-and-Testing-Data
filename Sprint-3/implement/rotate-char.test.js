// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Acceptance criteria:

// Given a character and a shift value,
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "g"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("F", 1)); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
console.log(rotateCharacter("z", 1)); // Output: "a" (preserves case, but wraps around)
console.log(rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around)

function rotateCharacter(char, shiftNum) {
    if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shiftNum) % 26) + 65);
    } else if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shiftNum) % 26) + 97);
    }
    return char;
}

let rotateChar = rotateCharacter("!", 1);
console.log(rotateChar);

// console.assert tests 
// Test 1
const currentOutput1 = rotateCharacter("a", 3);
const targetOutput1 = "d";
console.log(currentOutput1);
console.assert(currentOutput1 === targetOutput1, `${currentOutput1} is not equal ${targetOutput1}`);

// Test 2
const currentOutput2 = rotateCharacter("A", 3);
const targetOutput2 = "D";
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// Test 3
const currentOutput3 = rotateCharacter("*", 3);
const targetOutput3 = "*";
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// Test 4
const currentOutput4 = rotateCharacter("z", 1);
const targetOutput4 = "a";
console.log(currentOutput4);
console.assert(currentOutput4 === targetOutput4, `${currentOutput4} is not equal ${targetOutput4}`);

// Test 5
const currentOutput5 = rotateCharacter("Y", 2);
const targetOutput5 = "A";
console.log(currentOutput5);
console.assert(currentOutput5 === targetOutput5, `${currentOutput5} is not equal ${targetOutput5}`);

