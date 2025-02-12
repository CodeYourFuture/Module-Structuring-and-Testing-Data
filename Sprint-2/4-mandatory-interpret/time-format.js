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
// =============> write your answer here
//pad will be called three times for totalHours,  remainingMinutes, and  remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//remainingSeconds = 61 % 60 = 1
//totalMinutes = (61 - 1) / 60 = 1
//remainingMinutes = 1 % 60 = 1
//totalHours = (1 - 1) / 60 = 0
//Since pad(totalHours) is called first, num is assigned 0 in the first call to pad.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
//Since num = 0, pad(0) returns "00", because .padStart(2, "0") ensures it has two digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//The last call to pad happens with remainingSeconds, which is 1.
//So, num = 1 in the last call to pad.
//pad(1) returns "01" because .padStart(2, "0") ensures it has two digits.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//The last call is pad(1), which returns "01".
