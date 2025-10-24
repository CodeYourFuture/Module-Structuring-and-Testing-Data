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
// =============> 3 Times 
pad(totalHours)
pad(remainingMinutes)
pad(remainingSeconds)


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 first value is totalHours

// c) What is the return value of pad is called for the first time?
// =============> "00" because the target length is 2 digits

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 this is last value is remaining in Seconds

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01 because the target length is 2 digits
