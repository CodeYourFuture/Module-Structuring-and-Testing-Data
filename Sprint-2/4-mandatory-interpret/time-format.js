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
// Answer : three times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//  answer : 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// Answer : 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// answer : 1 and when pad is called, it is called remainingSecond as argument. when formatDisplay runs(61) then 61 divided by 60 and remaining number is 1,which passed to num, so the value of num is 1.
//
// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// answer:  01. return value is zero one because first received it one then pad formatted this number with two length.
