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
// =============> write your answer here
// its called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:
// formatTimeDisplay(61);

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00"


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The last call is pad(remainingSeconds) and i worked out that remainingSeconds = 1, so because 61 seconds leaves 1 second after dividing by 60.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01" the reason being: padStart(2, "0") adds a zero to the front because the string length is only 1. 
