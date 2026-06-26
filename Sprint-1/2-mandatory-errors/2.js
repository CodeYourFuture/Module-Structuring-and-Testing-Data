// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

        //The error was ReferenceError: cannot access `cityOfBirth` before initialization    
        //by swapping the order of the two lines, the error will be fixed.
        
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
