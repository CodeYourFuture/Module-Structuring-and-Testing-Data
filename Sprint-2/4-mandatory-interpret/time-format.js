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
//  3 times. =============> write your answer here

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer num is 0. =============> write your answer here

// c) What is the return value of pad is called for the first time?
num.toString().padStart(2, "0"); // answer will be "00"=============> write your answer here

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// num will be 1. The last pad is for the seconds value. =============> write your answer here

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//  Ans is "01" because padStart will enable two digits thereby adding 0 in front of it. =============> write your answer here
