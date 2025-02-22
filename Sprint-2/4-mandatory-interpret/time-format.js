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

console.log(formatTimeDisplay("61"));
// You will need to play computer with this example - use the Python Visualizer https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
  // it is called three times in line 11 "pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)"
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
  // total hours will be 00
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
  // it will rerun 0 hours
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
  // the value is 1 second "60 minutes 1 second" this will be the remaining seconds
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
  // the value will be 1 second since it is the remainder after the conversion and it will be displayed as 01 because of padStart method
