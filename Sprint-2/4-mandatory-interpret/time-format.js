function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
/* pad will be called 3 times. one for totalHours, one for remainingMinutes and one for remainingSeconds.*/

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
/* when I run the code the result is 00:01:01 there for the value assigned to num is "0".

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
/* the return value is "00". this comes 0 changed to string and then padstart(2,0) changes it to "00" */

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/* The value assigned to num when the pad is called for the last time is "1". */

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/* The return value is 1. The code 1.toString() changes the num 1 to string "1" then the code .padStart(2, "0"); changes "1" to "01"
