// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution

var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lows = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function low_to_cap(txt){
    let up_word = "";
    for (let i =0; i < txt.length ; i++){
        if (txt[i] == " "){
            up_word += "_"
        }
        else{
            up_word += txt[i].toUpperCase();
        }
        // for (let j = 0; j < lows.length; j++){
        //     if (txt[i] == lows[j]){
        //        up_word += caps[j]; 
        //     }
        // }
    } return up_word;
}

console.log(low_to_cap("lord of the ring"));