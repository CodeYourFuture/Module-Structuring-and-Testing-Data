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

let mySeconds = 61;
console.log(`${formatTimeDisplay(61)}`);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//ans: 3 times.
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//ans: So, the value assigned to num when pad is called for the first time is 0.
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
//ans: 0
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//ans: The last call to pad is pad(remainingSeconds). Therefore, when pad is called for the last time, the value assigned to num is 1.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//ans: 01....the return value assigned to num when pad is called for the last time in this program is "01".
