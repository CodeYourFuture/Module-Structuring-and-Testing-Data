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


//My solution

//Declare the range of the variables to be able to use the .includes, .indexOf and wrap methods

function rotateCharacter (char, rotation) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

//This handles for when the char is either null or undefined   

    if (char === null || char === undefined) {
        throw new Error("Please enter a number or character");
    }

/*This checks if a lowercase input includes a character from the variable range and then adds rotation to return a lowercase output.
The modulus operator and case.length handles wrap arounds by checking for remainder steps
*/

    if (uppercase.includes(char)) {
        const index = (uppercase.indexOf(char) + rotation) % uppercase.length;
        return uppercase[index];
    }

    if (lowercase.includes(char)) {
        const index = (lowercase.indexOf(char) + rotation) % lowercase.length;
        return lowercase[index];
    }
  

//This will use handle returning numbers as is
    else if (!isNaN(char)) {
        return Math.abs(Number(char)); //This will convert any negative numbers to positive numbers
    }

//This will handle all other inputs outside of the letter and number string parameters
    else
    throw new Error("Please enter a number or character");
}

module.exports = {rotateCharacter};