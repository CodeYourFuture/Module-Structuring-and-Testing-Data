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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// pad will be called 3 times 1. pad(totalHours) 2.pad(remainingMinutes) 3. pad(remainingSeconds)}

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// num is 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// num is 1, we are calling the pad with the argument remainingSeconds, when the formatTimeDisplay function was called
// with the argument 61, the next line of code is a variable declaration and an expression, the resulting value from this
// expression is passed into pad as an argument.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// num is 1 when passed as an argument into pad, the job of the function pad is to pad a zero before a number when said number is
// less than 2 in length - so the return value will be "01"

