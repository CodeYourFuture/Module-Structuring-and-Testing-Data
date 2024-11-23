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
//console.log(rotateCharacter("a", 3)); // Output: "d"
//console.log(rotateCharacter("f", 1)); // Output: "g"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
//console.log(rotateCharacter("A", 3)); // Output: "D"
//console.log(rotateCharacter("F", 1)); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
//console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
//console.log(rotateCharacter("z", 1)); // Output: "a" (preserves case, but wraps around)
//console.log(rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around)


function rotateCharacter(character, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = alphabet.toUpperCase();

    if (alphabet.includes(character)) {
        const newIndex = (alphabet.indexOf(character) + num) % 26;
        return alphabet[newIndex];
    } else if (upperAlphabet.includes(character)) {
        const newIndex = (upperAlphabet.indexOf(character) + num) % 26;
        return upperAlphabet[newIndex];
    } else {
        return character; // Non-letter characters are returned unchanged
    }
}

// Single test case
console.log(rotateCharacter("a", 2)); // Output: "c"
console.log(rotateCharacter("A", 2)); // Output: "C"
console.log(rotateCharacter("7", 5)); // Output: "7"
console.log(rotateCharacter("z", 1)); // Output: "a"
console.log(rotateCharacter("Y", 2)); // Output: "A"

// Test assertions
console.assert(rotateCharacter("a", 3) === "d", "Lowercase 'a' rotated by 3 should be 'd'");
console.assert(rotateCharacter("f", 1) === "g", "Lowercase 'f' rotated by 1 should be 'g'");
console.assert(rotateCharacter("A", 3) === "D", "Uppercase 'A' rotated by 3 should be 'D'");
console.assert(rotateCharacter("F", 1) === "G", "Uppercase 'F' rotated by 1 should be 'G'");
console.assert(rotateCharacter("7", 5) === "7", "Non-letter character '7' should remain unchanged");
console.assert(rotateCharacter("z", 1) === "a", "Lowercase 'z' rotated by 1 should wrap to 'a'");
console.assert(rotateCharacter("Y", 2) === "A", "Uppercase 'Y' rotated by 2 should wrap to 'A'");
console.assert(rotateCharacter(" ", 3) === " ", "Space character should remain unchanged");
console.assert(rotateCharacter("!", 10) === "!", "Special character should remain unchanged");


module.exports = {rotateCharacter};
