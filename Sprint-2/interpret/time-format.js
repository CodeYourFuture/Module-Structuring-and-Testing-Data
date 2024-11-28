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
// pad is called three times in the function formatTimeDisplay, once for hours, once for minutes and once more for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// the first time when pad is called, it is to format totalHours, which is calculated to 0 when formatTotalTimeDisplay(61) is called. The value of num is therefore 0

// c) What is the return value of pad is called for the first time?
// pad(0) calls 0.toString().padStart(2, "0"), which returns "00"
// num.toString() converts num to a string
// .padStart(2, "0") ensures that the string is at least 2 characters long, padding it with leading zeros if necessary.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The last pad call is remaining seconds 61 % 60 is 1, therefore 1 second remaining and the the value of num is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// pad(1) calls 1.toString().padStart(2, "0"), which returns "01"
// num.toString() converts num to a string
// .padStart(2, "0") ensures that the string is at least 2 characters long, padding it with leading zeros if necessary.
