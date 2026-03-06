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
// pad() is called 3 Times whenever formatTimeDisplay() is called.

// Call formatTimeDisplay with an input of 61, now answer the following:
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The first call to pad() is 0, for totalHours which is 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value is 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1: -> pad() was called from line 11. Given that num is 0, the first call to pad() (for totalHours which is 0). There were two more calls to pad()(for remainingLastMinutes and remaining LastSeconds) and the value assigned to num for the last call is 0

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//01 -> Given that num is 1, the last call to pad() (for remainingSeconds is 1) and the return value is 01, 
