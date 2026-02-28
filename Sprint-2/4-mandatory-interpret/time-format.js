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

console.log(formatTimeDisplay(10002));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad will be called 3 times, once for each of the hours, minutes and seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> num is assigned the value of 0, because 61 seconds is equal to 1 minute and 1 second, so the total hours is 0.

// c) What is the return value of pad is called for the first time?
// =============> The return value is "00", because pad pads the number 0 to 2 digits with leading zeros.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> num is assigned the value of 1, because 61 seconds is equal to 1 minute and 1 second,
//                so the remaining seconds is 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value is "01", because pad pads the number 1 to 2 digits with leading zeros.
