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

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
