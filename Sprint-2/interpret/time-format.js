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
/* Pad is being called 3 times to ensure that hours, minutes and seconds all have at least 2 digits
with a zero to start if there is only 1 digit.*/

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value assigned to num for the first time when pad is called is totalHours

// c) What is the return value of pad is called for the first time?
// The return value is 00 because there are no hours.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/* When pad is called for the last time, the value assigned is seconds and it would be the remainder
after seconds have been divided by 60. So if the input is 61, it would be 61 / 60 which leave 1
and that would be the seconds returned.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The return value is 01 because the remainder of 1 has been padded by a 0.