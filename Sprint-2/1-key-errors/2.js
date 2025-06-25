// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> 💡Answer: Mhmm there seems to be an error in line 8 because you can't use a number/integer alone as the start name of a parameter. It should be more of a name or string or add the number at the end of the value/name

/* function square(3) {
    return num * num;
}
    */

// =============> write the error message here: "SyntaxError: Unexpected number" and "ReferenceError: num is not defined"

// =============> explain this error message here: Using a number alone is not a valid identifier name in JavaScript. Identifiers must start with a letter, underscore (_), or dollar sign ($). Also , the variable `num` is not defined anywhere in the function, which leads to a ReferenceError when trying to use it.

// Finally, correct the code to fix the problem

// =============>
function square(Now3) {
  return Now3 * Now3;
}

console.log(square(3)); // Output: 9
