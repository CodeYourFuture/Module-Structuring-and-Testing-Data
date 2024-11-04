// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs. 
function toPounds(penceString) {  //example: 123p
    let removeP = penceString.slice(0,penceString.length-1); // output: 123
    let getPoundPart = removeP.slice(0,removeP.length-2); //output: 1
    let getPencePart = removeP.slice(-2); //23
    return `${getPoundPart}.${getPencePart} pound`;
}
console.log(toPounds("123p"));

// bug for 23p!. needs padding
function toPounds2(penceString) {  //example: 23p
    let removeP = penceString.slice(0,penceString.length-1); // output: 23
    let getPoundPart = removeP.slice(0,removeP.length-2).padStart(1,"0"); //it was output: empty before padding. 
    let getPencePart = removeP.slice(-2); //23
    return `${getPoundPart}.${getPencePart} pound`;

}
console.log(toPounds2("23p"));