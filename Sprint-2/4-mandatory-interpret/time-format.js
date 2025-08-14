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
// =============> 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> It is 0

// c) What is the return value of pad is called for the first time?
// =============> it is 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> It is 1
// The last time pad() is called, it's for the seconds value. Since remainingSeconds = 1, num is assigned 1.
//  pad(1) returns "01" to format the time as hh:mm:ss

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01
//The last call to pad() formats the seconds.
// remainingSeconds is 1, so pad(1) is called.Inside pad, 1 becomes "1" (string), and since it's a single digit, it's padded to "01".
// So the return value is "01".
