// Predict and explain first... /*There will be a syntax error in the code because the variable `str` is being declared twice within the same scope. The first declaration is in the function parameter, and the second declaration is inside the function body. This will cause a "SyntaxError: Identifier 'str' has already been declared" error.*?
//  =============> write your prediction here // there will be an error message as such SyntaxError: Identifier 'str' has already been declared

// call the function capitalise with a string input// capitalise("tobias");
// interpret the error message and figure out why an error is occurring, /*

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/
// =============> write your explanation here


/*/home/tobi/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/0.js:8
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
      ^

SyntaxError: Identifier 'str' has already been declared
    at Object.compileFunction (node:vm:353:18)
    at wrapSafe (node:internal/modules/cjs/loader:1039:15)
    at Module._compile (node:internal/modules/cjs/loader:1073:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)
    at Module.load (node:internal/modules/cjs/loader:989:32)
    at Function.Module._load (node:internal/modules/cjs/loader:829:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47*/
    // from the error message above the error occurred at line 8 where the variable `str` was declared again using `let` inside the function body, which is not allowed since `str` was already declared as a parameter of the function. 
    // to fix this error, we can either rename the variable inside the function body or remove the `let` keyword and just assign a new value to `str` without redeclaring it.
    
    // =============> write your new code here 
    function capitalise(str) {
      str = `${str[0].toUpperCase()}${str.slice(1)}`;
      return str;
    }
    capitalise("tobias");
    console.log(capitalise("tobias")); // Output: "Tobias"
    