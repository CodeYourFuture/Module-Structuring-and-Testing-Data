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
// It will be called 3 times, once for each of totalHours, remainingMinutes, and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 0, which is the value of totalHours when seconds is 61.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when it is called for the first time is "00". Since num is 0, the while loop adds a "0" to the front of numString until its length is 2, resulting in "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is 1, which is the value of remainingSeconds when seconds is 61. This is because 61 seconds is equal to 1 minute and 1 second, so remainingSeconds is calculated as 61 % 60, which equals 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value of pad when it is called for the last time in this program is "01". Since num is 1, the while loop adds a "0" to the front of numString until its length is 2, resulting in "01".
