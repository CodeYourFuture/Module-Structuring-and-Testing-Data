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
// =============> write your answer here: When formatTimeDisplay is called three times pad will be called, one for 'remainingSeconds', one for 'remainingMinutes', and one for 'totalHours'.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here: When pad is called for thee first time, num will be assigned the value of totalHours.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here: The return value of pad when called for the first time will be `pad(totalHours)` for example if the return of 'totalHours' is '1' we will add '0' to make it two digits('01').

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: When pad is called for the last time, num will be assigned the value of 'remainingSecond'.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: when pad is called for the last time, the return value will be `pad(remainingSecond)`.
