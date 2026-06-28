function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Answer to a) : when "formatTimeDisplay" is called "pad" is called 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// Answer to b) : value assigned to num when pad is called for the first time is 0 - zero

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// Answer to c) : the return value on pad is the "numString" variable, which is string "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer to d) : Value assigned to "num" the last time "pad" is called is 1, one.
// "num" in this case is a variable "remainingSeconds", which is a remainder of "seconds" (61)
//  variable divided by 60, which is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer to e) : The return value of "pad" the last time pad called is the variable "numString"
// which is - string "01". "toString" variable is a "num" converted to a string earlier in the function 
// and makes it double digit string.
