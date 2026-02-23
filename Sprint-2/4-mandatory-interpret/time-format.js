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
// =============> 3 times, once for totalHours, once for remainingMinutes and once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 1 because the first operation is 61 % 60 which gives us 1

// c) What is the return value of pad is called for the first time?
// =============> 00 because the first operation is totalHours which is 0 and it is padded to 2 digits with a 0 in front of it.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 because the last operation is 1 % 60 which gives us 1 

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01 because the last operation on the return line is remainingSeconds which is 1 and it is padded to 2 digits with a 0 in front of it.

