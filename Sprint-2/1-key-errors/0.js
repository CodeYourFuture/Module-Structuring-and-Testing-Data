// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let str = 'hello';
console.log(capitalise(str));
// =============> write your explanation here
// =============> write your new code here
//By capitilise(str)-> we have created a function with parameter str. 
// Inside the function, `str` is already declared as a local variable because it is a parameter.
// We can't declare another variable with the same name using `let` in the same scope.
// It was giving an error because we were trying to declare `str` again using `let`.
// I corrected it by removing `let` because we don't need to create another variable with the same name; we just have to assign a new value to the existing `str`.
// Outside the function, I created another variable with the same name, `str`. We can do this because it is in a different scope.
