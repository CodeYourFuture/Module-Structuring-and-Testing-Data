// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//The error is cause by an already declared str variable. The problem is fixed by removing the let keyword.

function capitalise(str) {
   return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("simphiwe"));