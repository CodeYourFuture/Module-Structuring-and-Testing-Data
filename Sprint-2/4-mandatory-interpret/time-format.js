function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; //61 % 60 = 1
  const totalMinutes = (seconds - remainingSeconds) / 60; //(61-1)/60 = 1
  const remainingMinutes = totalMinutes % 60; //1 % 60 = 1
  const totalHours = (totalMinutes - remainingMinutes) / 60; //(1 - 1)/60 = 0

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// pad will be called 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value is 0 because total hours is 0 i.e (1-1)/60 = 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value is 00 because "0".padStart(2, "0") is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// the value is 1 because 61 % 60 = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value is 01 because the value assign to nun is 1. When pad is called, it adds 0 at the start of the num because the length of the string num is currently 1.
