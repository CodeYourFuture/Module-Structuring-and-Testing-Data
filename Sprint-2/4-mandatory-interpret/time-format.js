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
// =============> write your answer here: 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here: 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: "1". This is because pad(remainingSeconds) is when pad was called for the last time. 
// since the function formatTimeDisplay is invoked with 61 as an input. the variable remainingSeconds evaluates to 61 % 60 = 1. 
// Therefore, P(1) is also invoked and as a result 1 is passed as value for the "num" input.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: "01". When pad(1) is called, the body of the function converts 1 from integer to
// a string, and then adds "0" to the left aiming to have a string with a total length of 2. Thus, "0" added to "1" to 
// the left of it forming a string with a total length of 2.
