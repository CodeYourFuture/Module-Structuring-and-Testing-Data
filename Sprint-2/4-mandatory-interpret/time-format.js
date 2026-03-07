function pad(num) {
  console.log(num);
  const result = num.toString().padStart(2, "0");
  console.log(result);
  return result;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  const time = `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
  console.log(time);
  return time;
}

formatTimeDisplay(61);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Pad is called three times in line 11 of the formatTimeDisplay().
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// value of num=0
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// it returns 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//value is 1
//the frame side when pad is called the last time num is assigned a value of 01

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here num is assigned a value of one when pad is called for the
// last time by the formatTimeDisplay function this value is used to evaluate the remaining seconds.
