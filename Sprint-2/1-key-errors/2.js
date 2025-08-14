// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// The parameter doesn't declare num identifier for the function to return value
// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// /Users/samuntasunuwar/CYF/Structuring and testing data/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:8
// function square(3) {
//                 ^

// SyntaxError: Unexpected number
//     at wrapSafe (node:internal/modules/cjs/loader:1512:18)
//     at Module._compile (node:internal/modules/cjs/loader:1534:20)
//     at Object..js (node:internal/modules/cjs/loader:1699:10)
//     at Module.load (node:internal/modules/cjs/loader:1313:32)
//     at Function._load (node:internal/modules/cjs/loader:1123:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:217:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49
// =============> explain this error message here
//Error message is giving us clue as to where the problem on this code is. It is a syntax error which mean the problem is within code structure.
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(5));
