// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//ReferenceError: Cannot access 'cityOfBirth' before initialization. in javaScript variable that declare with const and let can not access before assigning theme
//for fixing this simply we should assign variable before using it with console.log().
