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
// =============> It would be called 3 times, that is for hours, minutes and seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The answer would be '0' because the first time pad is called, relates to the hours remaining.

// c) What is the return value of pad is called for the first time?
// =============> It would return '00' because the value of num 0 is converted to a string "0", since its length is less than two the pad function adds a "0" to the front to output "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The answer is 1.
//explanation: the last time pad is  called is for the remaining seconds, which would return 1 because we passed 61 into the program, calculated as 61 % 60.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> Answer "01".
// Explanation: The return value of pad when it is called for the last time in this program is '01'. This is because the value of num is 1 (the remaining seconds after calculating 61 % 60).
// Since the length of the string representation of 1 is less than 2, the pad function adds a "0" to the front, resulting in "01".
