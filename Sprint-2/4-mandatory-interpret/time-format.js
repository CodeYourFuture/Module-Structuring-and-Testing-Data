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
// =============> Pad is called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 is the value assigned to num as the first pad is totalhours which calculates to be 0

// c) What is the return value of pad is called for the first time?
// =============> "00" - this is because it has been stated within the function that if the value's length is less than 2 which 0 is, then add another 0 at the beginning ("0" + numString;). Also toString converts 0 from a number to a string which is why I included ""

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the last pad is remainingSeconds which is 1 so the value assigned to num is 1

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> "01" - same logic as quested c. Also as "01" is not shorter than length of 2 the loop closes and doesn't run again
