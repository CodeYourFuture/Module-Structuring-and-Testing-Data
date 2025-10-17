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

// Example call
console.log(formatTimeDisplay(61)); // Output: "00:01:01"

// Answers to questions for input 61

// a) When formatTimeDisplay is called how many times will pad be called?
console.log("a) Number of times pad is called: 3");

// b) What is the value assigned to num when pad is called for the first time?
console.log("b) Value assigned to num in first call: 0");

// c) What is the return value of pad when called for the first time?
console.log("c) Return value of pad in first call: '00'");

// d) What is the value assigned to num when pad is called for the last time? Explain your answer
console.log("d) Value assigned to num in last call: 1 (remaining seconds)");

// e) What is the return value assigned to num when pad is called for the last time? Explain your answer
console.log(
  "e) Return value of pad in last call: '01' (1 converted to 2 characters with leading 0)"
);
