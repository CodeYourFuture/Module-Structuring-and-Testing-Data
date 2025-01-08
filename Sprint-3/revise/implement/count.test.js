// implement a function countChar that counts the number of times a character occurs in a string
function countChar(char, str){
    //Check valid input, str and char should be String and char should be 1 character
     if (typeof str !== "string" || typeof char !== "string" || char.length !== 1) {
         return "Invalid input";
    }
    // Initialize counter
    let counter = 0; 

    // For Loop to check the char in the string and count it in each loop.
    // counter is counting how many times character is repeating in string and i is counter of the loop. 
    // i starts with 0 (0 index of the string) and will count until the end of string (last index = length of the string -1)
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++; // If it matches so increment counter by 1
        }
    }
    // Return the total count
    return counter;  

    }
    console.log(countChar("a", "aaaaa")); //  5
    console.log(countChar("z", "hello")); //  0
    console.log(countChar("a", "AaAaA")); //  2

    /////////////<<<<<<<< test with jest syntax >>>>>>>>>///////
  test('count multiple character', () => {
        expect(countChar("a", "aaaaa")).toBe(5);
    });

    test('count character does not exist', () => {
        expect(countChar("z", "hello")).toBe(0);
    });

    test('count in an empty string', () => {
        expect(countChar("a", " ")).toBe(0);
    });

    test('count characters correctly', () => {
        expect(countChar("a", "AaAaA")).toBe(2);
        expect(countChar("A", "AaAaA")).toBe(3);
    });

    test('show an error for invalid inputs', () => {
        expect(countChar("a", null)).toBe("Invalid input");
        expect(countChar("", "hello")).toBe("Invalid input");
        expect(countChar("ab", "hello")).toBe("Invalid input");
    });

    
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
