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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

/**
 * formatTimeDisplay calls pad three times inside the template literal: once for hours, once for minutes, once for seconds.
 */

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

/**
 * Value of num when pad is called first time:
 * pad(totalHours) -> num = 0
 */

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

/**
 * Return value of pad first time:
 * "0".padStart(2, "0") = "00"
 */

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

/**
 * Value of num when pad is called last time:
 * Last pad call is pad(remainingSeconds) -> remainingSeconds = 1, so num = 1
 */

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

/**
 * Return value of last pad call:
 * "1".padStart(2, "0") = "01"
 */

/**
 * To recap all responses:
 *
 * (a) 3
 * (b) 0
 * (c) "00"
 * (d) 1 — because remainingSeconds is calculated first and holds 1, then after pad(totalHours) and pad(remainingMinutes) have finished, the final call is with that remainingSeconds variable, which is still 1.
 * (e) "01" — because 1 is padded with a leading zero making a two-character string "01".
 */

// Calling the function formatTimeDisplay passing the 12,000  seconds as argument
console.log(formatTimeDisplay(12000)) //return 03:20:00 

