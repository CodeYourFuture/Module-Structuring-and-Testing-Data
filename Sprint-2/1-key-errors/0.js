// Predict and explain first...
//  =============> write your prediction here
// the function will throw a syntax error because we are redeclaring 'str'. we can reassign - without using the let keyword.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// I will remove the let keyword, which is only used for declaration and assignment, when redeclaring we do not use the let keyword
// =============> write your new code here
function capitalise(str) {
    const capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
    return capitalisedStr
}

console.log(capitalise("butter"))