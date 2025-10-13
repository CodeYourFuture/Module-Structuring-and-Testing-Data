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
console.log(formatTimeDisplay(61)); // This line is inserted only to test the function. It returns "00:01:01"

// Here is a function that takes a number of seconds and returns a string formatted as "HH:MM:SS"
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//3 times
// Call formatTimeDisplay with an input of 61, now answer the following:
// 00:01:01
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//61
// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
