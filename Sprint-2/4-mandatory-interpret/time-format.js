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

// You will need to play computer with this example
// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// ===========> write your answer here
// Answer: 3 times (once for hours, once for minutes, and once for seconds).

// Call formatTimeDisplay with an input of 61, now answer the following:
// (I am calling it here to see the result)
console.log(formatTimeDisplay(61));

// b) What is the value assigned to num when pad is called for the first time?
// ===========> write your answer here
// Answer: 0. Because JavaScript evaluates the string from left to right, so it calls pad(totalHours) first, and totalHours is 0.

// c) What is the return value of pad is called for the first time?
// ===========> write your answer here
// Answer: "00"

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// ===========> write your answer here
// Answer: 1. Explanation: The last call in the return statement is pad(remainingSeconds). When the input is 61 seconds, 61 % 60 leaves 1 remaining second.

// e) What is the return value assigned to num when pad is called for the last time in this program? Explain your answer
// ===========> write your answer here
// Answer: "01". Explanation: The pad function takes the number 1, converts it to a string "1", and pads the start with a "0" to make it 2 characters long ("01").
