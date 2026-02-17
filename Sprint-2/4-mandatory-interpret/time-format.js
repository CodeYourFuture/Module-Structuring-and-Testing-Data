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
// Answer: 3 times
// pad(totalHours)
// pad(remainingMinutes)
// pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// pad(num) = pad(0) = 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// pad(num) = pad(0) = "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: pad(num) = pad(1) = 1
// Explanation below:
// Last call: pad(remainingSeconds)
// remainingSeconds = 1
// pad(1) → num = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: pad(num) = pad(1) = "01"
// Explanation below:
// Last call: pad(remainingSeconds)
// remainingSeconds = 1
// toString() → "1"
// "1".padStart(2, "0") → "01"
// pad(1) → "01"
