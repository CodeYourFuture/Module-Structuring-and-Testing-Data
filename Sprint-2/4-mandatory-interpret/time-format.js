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
// =============> The function pad(num) is called three times each time formatTimeDisplay(seconds) is executed.



// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> When pad is called for the first time inside formatTimeDisplay(seconds), the value assigned to num is totalHours.

// c) What is the return value of pad is called for the first time?
// =============> The return value of the first call to pad will be the result of totalHours.toString().padStart(2, "0").

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============>  the value assigned to num when pad is called for the last time is the remainder of seconds divided by 60.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value assigned when pad is called for the last time is 01. 
// The last time pad(num) is called, num is assigned the value of remainingSeconds. 
// This happens because pad is called three times in this order:

//First call → pad(totalHours)
//Second call → pad(remainingMinutes)
//Third (last) call → pad(remainingSeconds)

