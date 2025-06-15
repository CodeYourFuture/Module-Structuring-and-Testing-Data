// Predict and explain first...
//  =============> write your prediction here

/*My prediction is that this code wont work because we are declaring the str as a variable 
inside the body of the function. we should just do a return statement in the body of the function.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
1. We have one function named `capitalise`, and it takes one argument: `str` (a string).

2. It then returns a new string where:

3. `str[0].toUpperCase()` capitalizes the first character of the string, and `str.slice(1)` returns 
   the rest of the string starting from index position 1.

4. The two parts of the string are combined using template literals.

5. We define `str` as a variable outside the function body, assigning it the value "saratahir".

6. We define `result` as a variable and assign it the return value of calling the `capitalise` function with `str` as the argument.

7. Finally, we print the result using a `console.log` statement.
// =============> write your new code here */
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
let str = "saratahir"
let result = capitalise(str)
console.log(result)