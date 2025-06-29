// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
// this gives an error because the console.log comes before const or let variable and this kind of error is called "TDZ"
/*Even though you declared cityOfBirth with const, the console.log comes before that declaration. So JavaScript says:
"Hey! You’re trying to use cityOfBirth, but it hasn’t been initialized yet!" *\
// so to make it work i only need to change their position like below

const cityOfBirth = "Bolton"
console.log(`I was born in ${cityOfBirth}`)