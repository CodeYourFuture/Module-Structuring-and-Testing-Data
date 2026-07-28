// Predict and explain first...
//  =============> write your prediction here:    The function is capitalise is supposed to the take the first letter (at index 0) of the word, then turn it to a capital letter. And the slice (1) is supposed to delete the first letter at index 0, of a word and write the remaining letters. Then combine the first capital letter with the rest of the word which stayed the same except for the first letter which was removed with the slice method.  

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here: There is an error in line 8 because we are using 'str' to declare a new variable meanwhile this name has previously been used. WE should get a new name.
// =============> write your new code here
function capitalise(str) {
  let strOne = `${str[0].toUpperCase()}${str.slice(1)}`;
  return console.log(strOne);
}
capitalise("manhood");
