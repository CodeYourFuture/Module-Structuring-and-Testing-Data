// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
/*
 we try to print the value of variable `cityOfBirth` before declaring it.
 JavaScript throws a reference error because the variable `cityOfBirth` has not been
 defined at that point.*/

 console.log(`I was born in ${cityOfBirth}`);
 const cityOfBirth = "Bolton";
 
 // correct version
 // const cityOfBirth = "Bolton";
 // console.log(`I was born in ${cityOfBirth}`);
 