// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

//console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";

/*The above shows shows 'ReferenceError: Cannot access 'cityOfBirth' before initialization
    at Object.' This happens, according to Mozilla "when a lexical variable was accessed before it was initialized."

    To access it, it has to be flipped like this:  */

    const cityOfBirth = "Bolton";
    console.log(`I was born in ${cityOfBirth}`);