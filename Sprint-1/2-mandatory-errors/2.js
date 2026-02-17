// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

//ReferenceError: Cannot access 'cityOfBirth' before initialization

// This is happening because we are trying to use the variable cityOfBirth
// before it has been declared and assigned a value.

// Variables declared with let and const can't be accessed before they are initialized.

// To fix this error, we need to declare and assign a value to cityOfBirth before we try to log it to the console.
