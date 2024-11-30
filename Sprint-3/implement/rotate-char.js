function rotateCharacter(char, shift) {
    // Normalize the shift value to the range [0, 25]
    shift = ((shift % 26) + 26) % 26;

    if (char >= 'a' && char <= 'z') {
        let newCharCode = ((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0);
        return String.fromCharCode(newCharCode);
    }
    
    if (char >= 'A' && char <= 'Z') {
        let newCharCode = ((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0);
        return String.fromCharCode(newCharCode);
    }

    return char; // Return the character unchanged if it is not a letter
}

// Test cases for large and negative shifts
console.log(rotateCharacter("a", 3));    // Output: "d"
console.log(rotateCharacter("z", 1));    // Output: "a" (wraps around)
console.log(rotateCharacter("a", 26));   // Output: "a" (full rotation)
console.log(rotateCharacter("a", 52));   // Output: "a" (multiple full rotations)
console.log(rotateCharacter("a", -1));   // Output: "z" (negative shift)
console.log(rotateCharacter("z", -26));  // Output: "z" (full negative rotation)
console.log(rotateCharacter("Y", 28));   // Output: "A" (handles large positive shift)
console.log(rotateCharacter("B", -29));  // Output: "Y" (handles large negative shift)
console.log(rotateCharacter("7", 5));    // Output: "7" (unchanged, not a letter)

