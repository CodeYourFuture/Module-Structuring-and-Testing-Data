
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(3) {
    return num * num;
}

______________________________________SOLUTION_____________________________________________________
/*
The function is defined with a parameter name 3.

In JavaScript, parameter names must be valid identifiers, and identifiers cannot:

Start with a number.
Contain special characters (other than $ or _).
Using 3 as a parameter name violates JavaScript's syntax rules, resulting in a SyntaxError.
*/
//  Example error message:    SyntaxError: Unexpected number

/*Return Statement:

Even if the parameter name were corrected, the return statement references a variable num that is not defined in the function or globally.
If the syntax issue were resolved, the next error would be a ReferenceError:*/
//   ReferenceError: num is not defined


//       To fix the issues:

// I Use a valid parameter name (e.g., number).
// I Replace num with the parameter name in the return statement.

function square(number) {
    return number * number; // Multiply the parameter by itself
}

// Example usage
console.log(square(3)); // Output: 9
console.log(square(5)); // Output: 25

