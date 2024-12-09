function rotateCharacter(char, shift) {
  

  if (!/[a-zA-Z]/.test(char)) {
    return char;
  }

  const base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
  
  const code = char.charCodeAt(0);
  
  
  const rotatedCode = ((code - base + shift) % 26) + base;
  
  return String.fromCharCode(rotatedCode);
}

test('Rotate Lowercase Letters', () => {
        expect(rotateCharacter("a", 3)).toBe("d");
        expect(rotateCharacter("f", 1)).toBe("g");
    });

    test('Rotate Uppercase Letters', () => {
        expect(rotateCharacter("A",3)).toBe("D");
        expect(rotateCharacter("F", 1)).toBe("G");
    });
     test('Leave Non-Letter Characters Unchanged', () => {
    
        expect(rotateCharacter("7", 5)).toBe("7");
    });

    test('Shifting a Character with Wraparound', () => {
        expect(rotateCharacter("z",1)).toBe("a");
        expect(rotateCharacter("Y", 2)).toBe("A");
    });
