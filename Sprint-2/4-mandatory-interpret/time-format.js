function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}
console.log(pad());

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

//
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> three times in terms of hours, minutes and seconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad is called for the first time?
// =============> 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the value assigned to num will be 1, and because the remaining seconds after 61 % 60 will be 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> the return value of pad when it is called for the last time is "01". Because inside pad(), 1 is less than 2, and will be padded to "0" and will become "01".
