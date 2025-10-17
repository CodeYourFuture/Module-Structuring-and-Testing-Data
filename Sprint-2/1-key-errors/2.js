
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> // It will throw a syntaxerror because in the function definition we sit the parameter name not the value

// function square(3) {
//     return num * num;
// }

// =============> SyntaxError: Unexpected number

// =============> As I predicted we must set the parameter name in the definition

// Finally, correct the code to fix the problem

// =============> 
    function square(num) {
    return num * num;
}

console.log(square(3));
