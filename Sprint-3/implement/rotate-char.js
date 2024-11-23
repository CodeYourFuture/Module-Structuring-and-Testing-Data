function rotateCharacter(char, shift) {
    if (char >= 'a' && char <= 'z') {
        let newCharCode = ((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0);
        return String.fromCharCode(newCharCode);
    }
    
    if (char >= 'A' && char <= 'Z') {
        let newCharCode = ((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0);
        return String.fromCharCode(newCharCode);
    }

    return char;
}

// Test cases
console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "g"
console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("F", 1)); // Output: "G"
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)
console.log(rotateCharacter("z", 1)); // Output: "a" (wraps around)
console.log(rotateCharacter("Y", 2)); // Output: "A" (wraps around)
