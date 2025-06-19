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
// pad will be called 3 times, one for totalHours, one for remainingMinutes and one for remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// It is 0 because it is calling for totalHours which is 0 in this case.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// It is '00' because the function converts the number 0 to a string and pads it with zeros to make sure it is at least 2 characters long.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// It is 1 because it is calling for remainingSeconds which is 1 in this case.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// It is '01' because the function converts the number 1 to a string and pads it with zeros to make sure it is at least 2 characters long.
