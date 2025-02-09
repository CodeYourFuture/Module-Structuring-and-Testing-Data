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

let result = formatTimeDisplay(61);
console.log(result);

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here. Answer: Once for totalHours, once for remainingMinutes, and once for remainingSeconds. A total of 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here. Answer: totalHours = (61 -1) / 60 = 1 / 60 = 0. num = 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here. Answer : pad(0) evaluates to '0'.padStart(2, 0) and this evaluates to "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here. Answer: Last call to pad is for remaining Seconds which is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here. Answer: pad(1) evaluates to '1'.padStart(2, 0) and this evaluates to "01"
