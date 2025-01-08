// Implement a function repeat
    function repeat(str, count){
        // Check valid input :
        // str should be string, count should be number and integer
        if (typeof str !== 'string' || typeof count !== 'number' || !Number.isInteger(count)){
            return "argument is not valid";
        }
        // check valid input :
        // count should be positive
        if (count < 0){
            return "negative counts are not valid";
        }
        // check exception : when count is 0
        if (count === 0){
            return "";
        }
        // repeat string based on the count number with repeat method
        else{
            return str.repeat(count);
            }
        }


        /////////>>>>>>>>>> test with jest syntax >>>>>>>>>//////


    test('show an error for negative count', () => {
        expect(repeat("abc", -1)).toBe("negative counts are not valid");
    });

    test('show empty string for count 0', () => {
        expect(repeat("abc", 0)).toBe("");
    });

    test('show repeated string for positive count', () => {
        expect(repeat("abc", 3)).toBe("abcabcabc");
    });

    test('show empty string correctly', () => {
        expect(repeat("", 5)).toBe("");
    });

    test('show an error for non-string input', () => {
        expect(repeat(123, 2)).toBe("argument is not valid");
    });

    test('show an error for non-integer count', () => {
        expect(repeat("abc", 2.8)).toBe("argument is not valid");
    });
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
