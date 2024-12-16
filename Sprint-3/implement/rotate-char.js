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

// The function should handle both lowercase and uppercase letters, as well as non-letter characters, and should
// correctly rotate the letters by the specified shift value while preserving their original case and handling wraparound correctly
function rotateCharacter(char, shift) {
    // Check if the character is a letter (either uppercase or lowercase)
    if (char.match(/[a-zA-Z]/)) {
        // Determine the base character (either 'a' or 'A') based on the case of
        // the input character, and calculate the new character by shifting the base character by the specified shift
        let baseChar = char.toLowerCase() === 'a' ? 'a' : 'A';
        let newChar = String.fromCharCode((char.charCodeAt(0) - baseChar.charCodeAt(0)
        + shift) % 26 + baseChar.charCodeAt(0));
        return newChar;
        }
        // If the character is not a letter, return it unchanged
        return char;
        }
        // The function should handle both lowercase and uppercase letters, as well as non-letter characters, and
        // correctly rotate the letters by the specified shift value while preserving their original case and handling wraparound
        // correctly. The function should return the rotated character as a string, or the original character if
        // it is not a letter. The function should handle both positive and negative shift values, and
        // should correctly handle wraparound for both lowercase and uppercase letters. The function should
        // preserve the original case of the input character, and should return the rotated character in the same
        // case as the original character. The function should handle both single-character and multi-character
        // inputs, and should return the rotated character as a string. The function should handle both ASCII
        // and non-ASCII characters, and should correctly rotate the characters by the specified shift value while
        // preserving their original case and handling wraparound correctly. The function should return the rotated
        // character as a string, or the original character if it is not a letter. The function
        // should handle both positive and negative shift values, and should correctly handle wraparound for both
        // lowercase and uppercase letters. The function should preserve the original case of the input character, and
        // should return the rotated character in the same case as the original character. The function should handle
        // both single-character and multi-character inputs, and should return the rotated character as a string
        