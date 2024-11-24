function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// Answer: 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: 0

// c) What is the return value of pad is called for the first time?
// Answer: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: "01"

/* 
The pad function has an input parameter num
Based on the code, it is assumed that 
this parameter has a numeric type.

The function converts this parameter to a string 
and adds leading zeros on the left so that 
the string length is 2. That is, if this number 
is two-digit or more, then the leading zeros 
will be missing. For example, 
1 is converted to "01", 0 to "00", 53 to "53", 
302 to "302", etc.
 */