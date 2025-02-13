// Predict and explain first...
//  =============> write your prediction here
//i think the mistake is we have no word called function in js. we must use def to define a function which is called method in js.
//my bad, it just get mixed with python i think function is correct. def is for python.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}
//console.log(capitalise("miki"));

/* =============> write your explanation here
we can not redeclare a variable twice in the same scope because it is like giving two meaning for the same instruction. it just got mixed 
i.e Variable redeclaration in the same scope isnt possible in js. */
// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}
console.log(capitalise("miki")); This works just Fine !!!
