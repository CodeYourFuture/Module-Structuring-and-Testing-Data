function repeat(myString, repeatNumber) {
  if (repeatNumber < 0) return "Invalid Input must be a positive number";
  //if (repeatNumber < 0) throw new Error("Repeat count must be a positive number");
  //  if I use this instead return how I can test it with jest??
  return myString.repeat(repeatNumber);
}

module.exports = repeat;

// Note:
// When I wrote this code, I didn’t know there was already a built-in method for this.
// Please review this implementation as well.
//if (repeatNumber < 0) throw new Error("Repeat count must be a positive number"); if I use this instead return how I can test it with jest??

// function repeat(myString, repeatNumber) {
//   if (repeatNumber < 0) return "Invalid Input must be a positive number";
// let str = "";
// for (let i = 0; i < repeatNumber; i++) {
//   str += myString;
// }
// return str;
// }

//if (repeatNumber < 0) throw new Error("Repeat count must be a positive number");
