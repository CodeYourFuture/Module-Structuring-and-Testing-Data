
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> the parameter can not be a number
// Valid JavaScript Identifiers
// Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
// Cannot start with a number (0-9).
// Can contain letters, numbers, underscores, or dollar signs after the first character.
// Cannot be a reserved keyword (e.g., if, else, function, return).

// function square(3) {
//     return num * num;
// }

// console.log(square(4));

// =============> write the error message here
// /Users/setup/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:13
// function square(3) {
//                 ^

// SyntaxError: Unexpected number
//     at wrapSafe (node:internal/modules/cjs/loader:1662:18)
//     at Module._compile (node:internal/modules/cjs/loader:1704:20)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// =============> explain this error message here
// First Two Lines: Locate the file path and the specific line of code causing the error.
// Following Lines: Display the type of error (SyntaxError) and its message.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(4));

