// Implement a function repeat

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


function repeat(string, num){

    let tempString = "";
    if(num < 0){
        throw new Error("number is less than zero");

    }
    for( let i = 0; i < num; i++ ){
        tempString += string;
    }
    return tempString
}

console.log(repeat("hello", -2))


describe("repeat function", () =>{
    test('repeat String:', () => {
        expect(repeat("string",2)).toBe("stringstring")
    })

    test('handle Count of 1', () => {
        expect(repeat("string",1)).toBe("string")
    })

    test('Handle Count of 0:', () => {
        expect(repeat("string",0)).toBe("")
    })

    test('Negative Count:', () => {
        expect(repeat("string", -1)).toThrow("error: number is less than zero")
    })
}
)