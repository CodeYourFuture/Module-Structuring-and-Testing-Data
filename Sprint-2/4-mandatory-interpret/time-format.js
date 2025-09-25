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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// pad is called 3 times because there are 3 values to be padded - hours, minutes and seconds

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61)); // Should return "00:01:01"

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// num is assigned the value of totalHours which is 0 because 61 seconds is less than a minute

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value is "00" because the padStart method adds a "0" to the start of the string "0" to make it 2 characters long

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// num is assigned the value of remainingSeconds which is 1 because 61 seconds is 1 second more than a full minute (60 seconds)

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value is "01" because the padStart method adds a "0" to the start of the string "1" to make it 2 characters long

