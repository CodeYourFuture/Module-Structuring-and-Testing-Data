// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
   let _str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return _str;
}
console.log(capitalise("hakan"));

// =============> write your explanation here
/*
In this function of capitalise, there is a input parameter which is srt. 
New variable is also assigned with declaration with same name.
It is an error, because it is not able to declare new variable with same name.
*/
// =============> write your new code here
/*
I think, we can solve this bug with two different apprach
1. Change variable name in declaration
      function capitalise(str) {
        let _str = `${str[0].toUpperCase()}${str.slice(1)}`;
        return _str;
      }
2. Remove declaration key word and make just assignment        
      function capitalise(str) {
        let _str = `${str[0].toUpperCase()}${str.slice(1)}`;
        return _str;
      }
*/

