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
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//pad will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when it is called for the first time is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is 1.
// This is because the last call uses remainingSeconds, and for 61 seconds, remainingSeconds is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value of pad when it is called for the last time in this program is "01".
//This is because the last call is pad(1), and the pad function adds a zero in front to make it two digits.
/*function pad(1) {
  let numString = 1.toString(); // numString is "1"
  while (numString.length < 2) { // numString.length is 1, so the loop runs
    numString = "0" + numString; // numString becomes "01"
    return numString; // returns "01"
  }*/
