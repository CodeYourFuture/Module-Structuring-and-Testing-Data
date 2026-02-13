
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// This function will cause a syntax error due to the fact that the parameter should be variable name, not a literal value.
// The second issue is that "num" is used inside the function however it is not defined anywhere.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number
//   at internalCompileFunction (node:internal/vm:76:18)
//   at wrapSafe (node:internal/modules/cjs/loader:1283:20)
//   at Module._compile (node:internal/modules/cjs/loader:1328:27)
//   at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//   at Module.load (node:internal/modules/cjs/loader:1203:32)
//  at Module._load (node:internal/modules/cjs/loader:1019:12)
//   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//  at node:internal/main/run_main_module:28:49

// =============> explain this error message here
// This error message means that JS expects a parameter name within the function.
// The second error message is "num" is not declared.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));
