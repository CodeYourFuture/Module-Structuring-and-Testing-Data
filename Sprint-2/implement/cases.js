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
/*function convertToUpperSnakeCase(str){
    let x = str[0].toUpperCase()+str.slice(1);
    return x;
}
console.log(convertToUpperSnakeCase("sue and moein the best older brother")); */
/* function convertToUpperSnakeCase(str){
    let x = str.split(" ");
    let upperX = x[0].charAt(0).toUpperCase();
    return upperX;       // output: S
}
console.log(convertToUpperSnakeCase("sue and moein the best older brother")); */
function convertToUpperSnakeCase(str){
    let x = str.replaceAll(" ","_");
   let upperX = x.toUpperCase();
    return upperX;
}
console.log(convertToUpperSnakeCase("sue and moein the best older brother"));

//a function to turn "sue and moein the best older brother" to "Sue And Moein The Best Brother In The World":
function capitaliseFirstLetter(sentence){
    let x = sentence.split(" "); // Split the sentence into an array of words
    let y= x.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    let z = y.join(" ")  // Join the words back into a single string
    return z;
}
console.log(capitaliseFirstLetter("sue and moein the best older brother"));