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
//It will be called 3 times. 1 for hours, 1 for minutes, 1 for seconds.
// return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;

// Call formatTimeDisplay with an input of 61, now answer the following:
// [Running] node "/home/justice/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-2/4-mandatory-interpret/time-format.js"
//  00:01:01

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value is a string "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value is 1. When the input is 61, It is evaluating number of remaining seconds, 
// which equals 1.
// it is evaluating from left to right.
// 
//  e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value is a string "01" because also because .padStart has been used to ensure that the 
// value displays as a minimum of 2 digits in this case if less than 2 digits add a leading "0".