
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
/*/Users/ike/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:8
function square(3) {
                ^
SyntaxError: Unexpected number
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/

// =============> explain this error message here
/*
- the error is a SyntaxError because we are passing the parameter 3 to the function and our program isn't expecting a number.
_ To fix this error, we need to pass the variable num as parameter to the function square.
*/

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3))
