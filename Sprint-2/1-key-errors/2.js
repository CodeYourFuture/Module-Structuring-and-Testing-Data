
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// undefined, because "num" isn't used as a parameter

// function square(3) {
//     return num * num;
// }

// /Users/cyf/Desktop/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:8
// function square(3) {
//     ^

// SyntaxError: Unexpected number


// the first line tells us where the error occurs:root,folder,file,line 
//second line shows exactly which piece of code throws the error
//third line tells us which type of error it is, in this case it is a SyntaxError, meaning that the code wasnt written according to the rules of js,
//an finally it tells us what went wrong

// Finally, correct the code to fix the problem

 function square(num) {
    return num * num;
}

console.log(square(3));

